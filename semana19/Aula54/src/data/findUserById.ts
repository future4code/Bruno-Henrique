import connection from "../connection";
import { user } from "../types/user";

export default async function findUserById(id: string): Promise<user> {
    try {

        const [user] = await connection("User_Arq")
            .where({ id })

        return user

    } catch (error) {
        throw new Error("Internal server error!");
    }

}