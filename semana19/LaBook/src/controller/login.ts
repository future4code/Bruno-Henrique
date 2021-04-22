import { Request, Response } from "express"
import { loginBusiness } from "../business/loginBusiness"

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        let message = "Success!"

        const { email, password } = req.body

        const token: string = await loginBusiness({ email, password })

        res.status(200).send({ message, token })

    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400

        res.send({ message })
    }
}