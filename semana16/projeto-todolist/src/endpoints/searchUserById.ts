import { Request, Response } from "express"
import connection from "../connection"

const searchUserById = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id

        if (!id) {
            errorCode = 422
            throw new Error("Invalid parameters! Please check the id field.");
        }

        const results = await connection.raw(`
        SELECT id, nickname FROM users_todolist
        WHERE id = "${id}";
        `)

        if (results[0].length === 0) {
            errorCode = 404
            throw new Error("User not found");
        }

        res.status(200).send(results[0])

    } catch (error) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
}

export default searchUserById;