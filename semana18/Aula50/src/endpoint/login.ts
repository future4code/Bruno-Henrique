import { Request, Response } from "express"
import loginCheck from "../data/loginCheck"
import { tokenGenerator } from "../services/tokenGenerator"
import { userLogin } from "../types"


export default async function login(req: Request, res: Response): Promise<any> {
    try {
        const { email, password } = req.body as userLogin

        if (!email || !password) {
            res.statusCode = 422
            throw new Error("Todos os campos devem ser preenchidos!");
        }

        const user = await loginCheck(email)

        if (!user) {
            res.statusCode = 404
            throw new Error("Usuario não encontrado");
        }

        if (password !== user.password) {
            res.statusCode = 401
            throw new Error("Senha invalida");
        }
        const token: string = tokenGenerator({ id: user.id })

        res.status(201).send({ token: token })

    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}