import { UserInputDTO, LoginInputDTO, User } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { BaseError } from "../error/BaseError";

export class UserBusiness {

    constructor(
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator,
        private userDatabase: UserDatabase

    ) { }


    async createUser(input: UserInputDTO) {

        try {

            if (!input.name || !input.email || !input.password || !input.role) {
                throw new BaseError("Please check if 'name', 'email', 'password' and 'role' were filled! ", 422)
            }

            if (!input.email.includes("@")) {
                throw new BaseError("Invalid email", 422)
            }

            if (input.password.length < 8) {
                throw new BaseError("Password must be at least 8 characters", 422);
            }

            const id = this.idGenerator.generate();
            const hashPassword = await this.hashManager.hash(input.password);

            await this.userDatabase.createUser(id, input.email, input.name, hashPassword, User.stringToUserRole(input.role));

            const accessToken = this.authenticator.generateToken({ id, role: input.role });

            return accessToken;

        } catch (error) {

            if (error.message.includes("key 'email'")) {
                throw new BaseError("Email already in use", 409)
            }

            throw new BaseError(error.message, error.statusCode)

        }

    }

    async getUserByEmail(user: LoginInputDTO) {

        const userFromDB = await this.userDatabase.getUserByEmail(user.email);

        const hashCompare = await this.hashManager.compare(user.password, userFromDB.getPassword());

        const accessToken = this.authenticator.generateToken({ id: userFromDB.getId(), role: userFromDB.getRole() });

        if (!hashCompare) {
            throw new BaseError("Invalid Password!", 401)
        }

        return accessToken;
    }
}

export default new UserBusiness(
    new IdGenerator(),
    new HashManager(),
    new Authenticator(),
    new UserDatabase()
)