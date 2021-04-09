import { Request, Response } from "express"
import { selectRecipe } from "../data/selectRecipe";
import { getTokenData } from "../services/tokenGenerator";
import { jwtAuthentication } from "../types";
import dayjs from "dayjs";

export default async function getRecipeById(req: Request, res: Response): Promise<any> {
    try {
        const token: string = req.headers.authorization!

        const id: string = req.params.id

        if (!token) {
            res.statusCode = 401
            throw new Error("Required token.");
        }

        if (!id) {
            res.statusCode = 422
            throw new Error("Please, ckeck if 'id' field were filled.");
        }

        const user: jwtAuthentication | null = getTokenData(token)

        if (!user) {
            res.statusCode = 404
            throw new Error("Please log in");
        }

        const recipe = await selectRecipe(Number(id))

        if(!recipe){
            res.statusCode = 404
            throw new Error("Recipe not found!");            
        }

        res.status(200).send({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            createdAt: recipe.createdAt
        })

    } catch (error) {

        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }

}