import { connection } from "./connection"
import { post } from "../model/postModel"

export class PostDatabase {

    constructor() {

    }

    async postCreator(post: post): Promise<void> {

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

    async checkPost(id: string): Promise<post | undefined> {
        try {

            const [post] = await connection("labook_posts")
                .select("*")
                .where({ id })

            return post

        } catch (error) {
            console.log("Estou dentro do checkPost")
        }
    }

}