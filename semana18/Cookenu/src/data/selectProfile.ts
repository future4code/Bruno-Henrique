import connection from "../connection";
import { account } from "../types";

export async function selectProfile(id: string): Promise<account | null> {
    try {

        const [profile] = await connection("cookenu_users")
            .where({ id })
        
            if(!profile){
                throw new Error("Invalid id");                
            }

        return profile

    } catch (error) {
        console.log(error.message)
        return null
    }
}

