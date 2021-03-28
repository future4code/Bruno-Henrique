import { Request, Response } from "express"
import connection from "../connection"

const addTask = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { title, description, scheduleDate, creator_id } = req.body
        const [day, mounth, year] = scheduleDate.split("/")
        const limit_date: Date = new Date(`${year}-${mounth}-${day}`)

        await connection("tasks_todolist")
            .insert({

                title,
                description,
                limit_date,
                creator_id
            })

        res.send("Task added!")

    } catch (error) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
}

export default addTask