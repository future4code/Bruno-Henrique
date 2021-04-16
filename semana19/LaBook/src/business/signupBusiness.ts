import { UserDatabase } from "../data/UserDatabase";
import { userSignup } from "../model/userModel";
import { HashManager } from "../services/hashManager"
import { generateId } from "../services/idGenerator";
import { generateToken } from "../services/tokenGenerator";

export async function signupBusiness(input: userSignup): Promise<string> {
    try {

        if (!input.name || !input.email || !input.password) {
            //res.statusCode = 406
            const message = '"name", "email" and "password" must be provided'
            throw new Error(message)
        }

        const manager = new HashManager()
        const database = new UserDatabase()
        
        const cypherPassword = await manager.hash(input.password);
        const id: string = generateId()

        await database.signup({
            id,
            name: input.name,
            email: input.email,
            password: cypherPassword
        })

        const token: string = generateToken({ id })

        return token

    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }

}


