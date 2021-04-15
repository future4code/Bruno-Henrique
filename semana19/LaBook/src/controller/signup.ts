import { Request, Response } from "express"
import { signupBusiness } from "../business/signupBusiness"

export const signup = async (req: Request, res: Response) => {
    try {
        let message = "Success!"
        const { name, email, password } = req.body

        const token: string = await signupBusiness({ name, email, password })

        res.status(201).send({ message, token })

    } catch (error) {
        res.statusCode = 400
        let message = error.sqlMessage || error.message

        res.send({ message })
    }
}