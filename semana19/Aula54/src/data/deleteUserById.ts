import connection from "../connection";
import { user } from "../types/user";

export default async function deleteUserById(id: string): Promise<void> {
    try {

       await connection("User_Arq")
            .delete()
            .where({ id })

    } catch (error) {
        throw new Error("Internal server error!");
    }

}