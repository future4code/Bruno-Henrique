import userCheck from "../data/userCheck";
import { generateToken } from "../services/authenticator";
import { compare } from "../services/hashManager";
import { userLogin } from "../types/login";

export async function loginLogic(input: userLogin): Promise<string> {
    let errorCode = 400
    try {

        if (!input.email || !input.password) {
            errorCode = 422
            throw new Error("Please, check if all fields were filled!")
        }

        const user = await userCheck(input.email)

        if (!user) {
            errorCode = 404
            throw new Error("User not found. Please check if your 'email' is correct.");
        }

        const passwordCheck: boolean = await compare(input.password, user.password)

        if (!passwordCheck) {
            errorCode = 401
            throw new Error("Sorry! Check if your 'password' is correct");
        }

        const token: string = generateToken({id: user.id , role: user.role})

        return token

    } catch (error) {
        throw new Error(error.message);
    }

}