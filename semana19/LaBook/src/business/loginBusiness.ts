import { checkUser } from "../data/checkUser"
import { user, userLogin } from "../model/userModel"
import { compare } from "../services/hashManager"
import { generateToken } from "../services/tokenGenerator"

export async function loginBusiness(input: userLogin): Promise<string> {
    try {

        if (!input.email || !input.password) {
            //res.statusCode = 406
            let message = '"email" and "password" must be provided'
            throw new Error(message)
        }

        const queryResult: any = await checkUser(input.email)

        if (!queryResult[0]) {
            //res.statusCode = 401
            let message = "Invalid credentials"
            throw new Error(message)
        }

        const user: user = {
            id: queryResult[0].id,
            name: queryResult[0].name,
            email: queryResult[0].email,
            password: queryResult[0].password
        }

        const passwordIsCorrect: boolean = await compare(input.password, user.password)

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

