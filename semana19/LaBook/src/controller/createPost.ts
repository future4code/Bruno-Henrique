import { Request, Response } from "express"
import { createPostBusiness } from "../business/createPostBusiness"

export const createPost = async (req: Request, res: Response) => {
   try {
      let message = "Success!"

      const { photo, description, type } = req.body

      const token: string = req.headers.authorization as string

      await createPostBusiness(token, photo, description, type)

      res.status(201).send({ message })

   } catch (error) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400

      res.send({ message })
   }
}
