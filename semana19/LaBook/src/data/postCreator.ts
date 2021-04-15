import { post } from "../model/postModel"
import { connection } from "./connection"

export const postCreator = async (post: post): Promise<void> => {

    try {
        await connection("labook_posts")
            .insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                created_at: post.createdAt,
                author_id: post.authorId
            })

    } catch (error) {
        console.log("Estou dentro de postCreator")
    }


}



