import { Request, Response } from "express";
import { signupLogic } from "../logic/signupLogic";
import { userSignup } from "../types/signup";


export default async function signup(req: Request, res: Response): Promise<any> {
    try {

        const { name, email, password, role } = req.body as userSignup

        const token: string = await signupLogic({ name, email, password, role })

        res.status(201).send({ message: "Success! User Created", token: token })

    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal sever error" })
        } else {
            res.send({ message: error.message })
        }
    }

}