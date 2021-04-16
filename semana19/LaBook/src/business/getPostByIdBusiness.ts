import { checkPost } from "../data/checkPost"
import { post } from "../model/postModel"



export async function getPostByIdBusiness(id: string): Promise<any> {
    try {

        const queryResult: any = await checkPost(id)

        if (!queryResult[0]) {
            //res.statusCode = 404
            //message = "Post not found"
            throw new Error("message")
        }

        const post: post = {
            id: queryResult[0].id,
            photo: queryResult[0].photo,
            description: queryResult[0].description,
            type: queryResult[0].type,
            createdAt: queryResult[0].created_at,
            authorId: queryResult[0].author_id,
        }

        return post

    } catch (error) {
        console.log("EStou dentro do gePostByIdBusinnes")
    }

}