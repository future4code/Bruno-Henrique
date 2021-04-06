import { Request, Response } from "express"
import connection from "../connection";
import { getTokenData } from "../services/tokenGenerator";

export default async function getProfile(req: Request, res: Response): Promise<any> {
    try {
        const token = req.headers.authorization as string

        if (!token) {
            res.statusCode = 422
            throw new Error("Token invalido");
        }

        const authData = getTokenData(token)

        if (!authData) {
            res.statusCode = 404
            throw new Error("Usuario não encontrado");
        }

        const [user] = await connection("Users")
            .where({ id: authData.id })

        res.status(200).send({ 
            id: user.id,
            email: user.email
        })

    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}