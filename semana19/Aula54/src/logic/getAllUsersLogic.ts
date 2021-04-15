import allUsers from "../data/allUsers";
import { getTokenData } from "../services/authenticator";

import { user } from "../types/user";

export async function getAllUsersLogic(token: string): Promise<any> {

    try {

        if (!token) {
            throw new Error("Sorry! You need to login to access this information");
        }

        const checkToken = getTokenData(token)

        if(!checkToken){
            throw new Error("Sorry! Invalid 'token'.");            
        }

        const users : user[] = await allUsers()

        return users

    } catch (error) {
        throw new Error(error.message);
    }

}