import connection from "../connection";
import { ROLE_TYPE } from "../types/signup";


export default async function signupCreator(
    id: string,
    name: string,
    email: string,
    password: string,
    role: ROLE_TYPE): Promise<void> {
    await connection("User_Arq")
        .insert({
            id,
            name,
            email,
            password,
            role
        })
}
