import { Request, Response } from "express"
import connection from "../connection"

const getUserTasks = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const result = await connection.raw(`
        SELECT tasks_todolist.id as TaskId, title, description, limit_date, users_todolist.id as UserId, nickname 
        FROM users_todolist
        JOIN tasks_todolist ON "${req.params.id}" = creator_id
        `);

        res.send(result[0])

    } catch (error) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
}

export default getUserTasks