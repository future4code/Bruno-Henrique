import { Request, Response } from "express"
import connection from "../connection"

const getUserById = async (req: Request, res: Response): Promise<any> => {
    let errorCode = 400
    try {
        const id = req.params.id

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
        console.log(error.sqlmessage)
        res.status(errorCode).send({message: error.message})
    }
}

export default getUserById;