
import { Request, Response } from "express"
import createUser from "../data/createUser"
import { hash } from "../services/encrypt"
import { idGenerator } from "../services/idGenerator"
import { tokenGenerator } from "../services/tokenGenerator"
import { userLogin } from "../types"

export default async function createSignup(req: Request, res: Response): Promise<void> {
    try {

        const { email, password } = req.body as userLogin

        if (!email || !password) {
            res.statusCode = 422
            throw new Error("Todos os campos devem ser preenchidos");
        }

        if (!email.includes("@")) {
            res.statusCode = 422
            throw new Error("Informe um email valido!");
        }

        if (password.length < 6) {
            res.statusCode = 422
            throw new Error("Informe uma senha valida! Minimo 6 caracteres ");
        }

        const id: string = idGenerator()

        const passwordHash = await hash(password)

        await createUser(id, email, passwordHash)

        const token: string = tokenGenerator({ id })

        res.status(201).send({ token: token })

    } catch (error) {

        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }

}