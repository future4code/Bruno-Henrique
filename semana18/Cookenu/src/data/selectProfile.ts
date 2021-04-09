import connection from "../connection";
import { account } from "../types";

export async function selectProfile(id: string): Promise<account> {
    const [profile] = await connection("cookenu_users")
        .where({ id })

    return profile
}

