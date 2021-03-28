import { Request, Response } from "express"
import connection from "../connection"

const getUserTasks = async (req: Request, res: Response): Promise<any> => {
    let errorCode = 400
    try {

        const id = req.params.id

        const checkId = await connection("users_todolist")
            .where({ "id": id })

        if (checkId.length === 0) {
            errorCode = 404
            throw new Error("User not found");            
        }

        const result = await connection.raw(`
        SELECT tasks.*, users.nickname FROM tasks_todolist AS tasks
        JOIN users_todolist AS users
        ON users.id = creator_id
        WHERE creator_id = "${id}"
        `);

        if (result[0].length === 0) {
            errorCode = 200
            throw new Error("The user has no pending tasks.");
        }

        res.send(result[0])

    } catch (error) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
}

export default getUserTasks