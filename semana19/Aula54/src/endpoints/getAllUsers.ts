import { Request, Response } from "express";
import { getAllUsersLogic } from "../logic/getAllUsersLogic";

export default async function getAllUsers(req: Request, res: Response): Promise<any> {
    try {

        const token = req.headers.authorization as string

        const results = await getAllUsersLogic(token)

        res.status(200).send(results)

    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: error.message})
        } else {
            res.send({ message: error.message })
        }
    }

}