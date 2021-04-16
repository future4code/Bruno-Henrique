import { Request, Response } from "express"
import { getPostByIdBusiness } from "../business/getPostByIdBusiness"
import { post } from "../model/postModel"

export const getPostById = async (req: Request, res: Response): Promise<void> => {
    try {
        let message = "Success!"

        const { id } = req.params

        const post: post = await getPostByIdBusiness(id)

        res.status(200).send({ message, post })

    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400

        res.send({ message })
    }
}
