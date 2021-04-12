import signupCreator from "../data/signupCreator";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { convertRole, ROLE_TYPE, userSignup } from "../types/signup";

export async function signupLogic(input: userSignup): Promise<string> {
    let errorCode = 400
    try {

        if (!input.name || !input.email || !input.password || !input.role) {
            errorCode = 422
            throw new Error("Please, check if all fields were filled!")
        }

        if (input.role.toUpperCase() !== ROLE_TYPE.ADMIN
            && input.role.toUpperCase() !== ROLE_TYPE.NORMAL) {
            errorCode = 422
            throw new Error("Sorry! Check if user 'role' field is admin or normal.");
        }

        const id: string = generateId()

        const cypherPassword: string = await hash(input.password)

        const userRole: ROLE_TYPE = convertRole(input.role.toUpperCase())

        await signupCreator(id, input.name, input.email, cypherPassword, userRole)

        const token: string = generateToken({ id, role: userRole })

        return token

    } catch (error) {
        throw new Error(error.message);
    }

}