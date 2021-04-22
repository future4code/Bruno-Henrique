import { UserDatabase } from "../data/UserDatabase"
import { user, userLogin } from "../model/userModel"
import { HashManager } from "../services/hashManager"
import { generateToken } from "../services/tokenGenerator"

export async function loginBusiness(input: userLogin): Promise<string> {
    try {

        if (!input.email || !input.password) {
            //res.statusCode = 406
            let message = '"email" and "password" must be provided'
            throw new Error(message)
        }

        const database = new UserDatabase()

        const queryResult: any = await database.checkUser(input.email)

        if (!queryResult) {
            //res.statusCode = 401
            let message = "Invalid credentials"
            throw new Error(message)
        }

        const user: user = {
            id: queryResult.id,
            name: queryResult.name,
            email: queryResult.email,
            password: queryResult.password
        }

        const manager = new HashManager()

        const passwordIsCorrect: boolean = await manager.compare(input.password, user.password)

        if (!passwordIsCorrect) {
            //res.statusCode = 401
            let message = "Invalid credentials"
            throw new Error(message)
        }

        const token: string = generateToken({
            id: user.id
        })

        return token

    } catch (error) {
        throw new Error(error.message);
    }
}

