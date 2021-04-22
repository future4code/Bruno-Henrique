import { Request, Response } from "express"
import { selectProfile } from "../data/selectProfile";
import { getTokenData } from "../services/tokenGenerator";
import { jwtAuthentication } from "../types";

export default async function getProfile(req: Request, res: Response): Promise<void> {
    try {
        const token: string = req.headers.authorization!
        
        if (!token) {
            res.statusCode = 401
            throw new Error("Required token.");
        }

        const user: jwtAuthentication | null = getTokenData(token)

        if (!user) {
            res.statusCode = 404
            throw new Error("User not found.");
        }

        const profile = await selectProfile(user.id)

        res.status(200).send({
            id: profile!.id,
            name: profile!.name,
            email: profile!.email
        })


    } catch (error) {

        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }

}