import { connection } from "./connection"

export const checkUser = async (email: string): Promise<any> => {
    try {

        const user = await connection("labook_users")
            .select("*")
            .where({ email })

        return user

    } catch (error) {
        console.log("Estou dentro do checkUser")
    }

}

