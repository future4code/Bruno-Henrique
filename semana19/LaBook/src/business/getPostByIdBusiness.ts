import { PostDatabase } from "../data/PostDatabase"
import { post } from "../model/postModel"

export async function getPostByIdBusiness(id: string): Promise<post | undefined> {
    try {

        const database = new PostDatabase()
        const queryResult: any = await database.checkPost(id)

        if (!queryResult) {
            //res.statusCode = 404
            let message = "Post not found"
            throw new Error(message)
        }

        const post: post = {
            id: queryResult.id,
            photo: queryResult.photo,
            description: queryResult.description,
            type: queryResult.type,
            createdAt: queryResult.created_at,
            authorId: queryResult.author_id,
        }

        return post

    } catch (error) {
        console.log("EStou dentro do gePostByIdBusinnes")
    }

}