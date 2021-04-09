import { Request, Response } from "express"
import accountCreator from "../data/accountCreator";
import userCheck from "../data/userCheck";
import { hash } from "../services/encrypt";
import { idGenerator } from "../services/idGenerator";
import { tokenGenerator } from "../services/tokenGenerator";
import dotenv from "dotenv"
import { account } from "../types"

dotenv.config()

export default async function createAccount(req: Request, res: Response): Promise<void> {
    try {
        const { name, email, password } = req.body as account

        if (!name || !email || !password) {
            res.statusCode = 422
            throw new Error("Please, check if all fields(name, email, password) were filled!");
        }

        if (password.length < 6) {
            res.statusCode = 401
            throw new Error("Sorry! Your password must be at least 6 characters.");
        }

        const user: account = await userCheck(email)

        if (user) {
            res.statusCode = 401
            throw new Error("Sorry! E-mail already registered");
        }

        const id: string = idGenerator()
        const cypherPassword: string = await hash(password)

        await accountCreator(id, name, email, cypherPassword)

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