import { connection } from "./connection"

export const checkPost = async (id: string): Promise<any> => {
    try {

        const post = await connection("labook_posts")
            .select("*")
            .where({ id })

        return post

    } catch (error) {
        console.log("Estou dentro do checkPost")
    }

}