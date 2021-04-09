import { Request, Response } from "express"
import recipeCreator from "../data/recipeCreator"
import { getTokenData } from "../services/tokenGenerator"
import { jwtAuthentication, recipe } from "../types"

export default async function createRecipe(req: Request, res: Response): Promise<void> {
    try {
        const token: string | undefined = req.headers.authorization
        const { title, description } = req.body as recipe
        
        if (!token) {
            res.statusCode = 401
            throw new Error("Required token.");
        }

        const user: jwtAuthentication | null = getTokenData(token)

        if (!user) {
            res.statusCode = 404
            throw new Error("User not found.");
        }

        if(!title || !description){
            res.statusCode = 422
            throw new Error("Please, ckeck if 'title' and 'description' field were filled.");            
        }

        await recipeCreator(title, description, user.id)

        res.status(201).send({message: "Created!"})

    } catch (error) {

        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }

}