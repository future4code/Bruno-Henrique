import { Request, Response } from "express";
import { loginLogic } from "../logic/loginLogic";
import { userLogin } from "../types/login";


export default async function login(req: Request, res: Response): Promise<void> {
    try {

        const { email, password } = req.body as userLogin

        const token: string = await loginLogic({ email, password })

        res.status(200).send({ token: token })

    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: error.message})
        } else {
            res.send({ message: error.message })
        }
    }

}