
import { Request, Response } from "express"
import createUser from "../data/createUser"
import loginCheck from "../data/loginCheck"
import { hash } from "../services/encrypt"
import { idGenerator } from "../services/idGenerator"
import { tokenGenerator } from "../services/tokenGenerator"
import { userSignup, USER_ROLE } from "../types"

export default async function createSignup(req: Request, res: Response): Promise<void> {
    try {

        const { email, password, role } = req.body as userSignup

        if (!email || !password || !role) {
            res.statusCode = 422
            throw new Error("Todos os campos devem ser preenchidos");
        }

        if (!email.includes("@")) {
            res.statusCode = 422
            throw new Error("Informe um email valido!");
        }

        const checkUser = await loginCheck(email)

        if (checkUser) {
            res.statusCode = 422
            throw new Error("Email ja cadastrado.");
            
        }

        if (password.length < 6) {
            res.statusCode = 422
            throw new Error("Informe uma senha valida! Minimo 6 caracteres ");
        }

        if (role.toUpperCase() !== USER_ROLE.ADMIN && role.toUpperCase() !== USER_ROLE.NORMAL) {
            res.statusCode = 422
            throw new Error("Informe uma 'role' valida!");
        }

        const id: string = idGenerator()

        const passwordHash = await hash(password)

        await createUser(id, email, passwordHash, role.toUpperCase())

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