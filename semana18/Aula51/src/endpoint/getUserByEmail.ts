import { Request, Response } from "express"
import loginCheck from "../data/loginCheck"

async function getUserByEmail(req: Request, res: Response): Promise<any> {
    try {

        const email: string = req.body.email

        if(!email){
            res.statusCode = 422
            throw new Error("Todos os campos devem ser preenchidos!");
        }

        const user = await loginCheck(email)

        if (!user) {
            res.statusCode = 404
            throw new Error("Usuario não encontrado");
        }

        res.status(200).send(user)

    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}

export default getUserByEmail