import { Request, Response } from "express"
import { selectProfile } from "../data/selectProfile";
import { getTokenData } from "../services/tokenGenerator";
import { jwtAuthentication } from "../types";

export default async function getUserProfile(req: Request, res: Response): Promise<void> {
    try {
        const token: string = req.headers.authorization!

        const id: string = req.params.id

        if (!token) {
            res.statusCode = 401
            throw new Error("Required token.");
        }

        if(!id){
            res.statusCode = 422
            throw new Error("Please, ckeck if 'id' field were filled.");             
        }

        const user: jwtAuthentication | null = getTokenData(token)

        if (!user) {
            res.statusCode = 404
            throw new Error("Please log in");
        }

        const profile = await selectProfile(id)

        if(!profile){
            res.statusCode = 404
            throw new Error(`User with id: ${id} not found`);            
        }

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