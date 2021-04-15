import { signupData } from "../data/signupData";
import { userSignup } from "../model/userModel";
import { hash } from "../services/hashManager"
import { generateId } from "../services/idGenerator";
import { generateToken } from "../services/tokenGenerator";

export async function signupBusiness(input: userSignup): Promise<string> {
    try {

        if (!input.name || !input.email || !input.password) {
            //res.statusCode = 406
            //message = '"name", "email" and "password" must be provided'
            //throw new Error(message)
        }

        const id: string = generateId()
        const cypherPassword = await hash(input.password);

        await signupData({
            id,
            name: input.name,
            email: input.email,
            password: cypherPassword
        })

        const token: string = generateToken({ id })

        return token

    } catch (error) {
        throw new Error("Estou na camada de signupBusiness");        
    }

}


