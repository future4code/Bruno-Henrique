import deleteUserById from "../data/deleteUserById";
import findUserById from "../data/findUserById";
import { getTokenData } from "../services/authenticator";

import { user } from "../types/user";

export async function deleteUserByIdLogic(token: string, id: string): Promise<any> {

    try {

        if (!token) {
            throw new Error("Sorry! You need to login to access this information");
        }

        const checkToken = getTokenData(token)

        if (!checkToken) {
            throw new Error("Sorry! Invalid 'token'.");
        }

        if (checkToken.role !== "ADMIN") {
            throw new Error("Sorry! You must be 'ADMIN' to do this action.");
        }

        const user: user = await findUserById(id)

        if (!user) {
            throw new Error("User not found. Check if 'id' is correct!");
        }

        await deleteUserById(id)

        

    } catch (error) {
        throw new Error(error.message);
    }

}