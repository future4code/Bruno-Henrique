import { Request, Response } from "express";
import { deleteUserByIdLogic } from "../logic/deleteUserByIdLogic";

export default async function deleteUserById(req: Request, res: Response): Promise<any> {
    try {

        const token = req.headers.authorization as string

        const id: string = req.params.id as string

        await deleteUserByIdLogic(token, id)

        res.status(200).send({message: "Deleted"})

    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: error.message })
        } else {
            res.send({ message: error.message })
        }
    }

}