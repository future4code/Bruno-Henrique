import { Request, Response } from "express"
import connection from "../connection"

const addTask = async (req: Request, res: Response): Promise<any> => {
    let errorCode = 400
    try {
        const title: string = req.body.title
        const description: string = req.body.description
        const scheduleDate: string = req.body.scheduleDate
        const creatorId: string = req.body.creator_id

        if (!title || !description || !scheduleDate || !creatorId) {
            errorCode = 422
            if (!title) {
                throw new Error("Please ckeck the title field!");
            }
            if (!description) {
                throw new Error("Please ckeck the description field!");
            }
            if (!scheduleDate) {
                throw new Error("Please ckeck the scheduleDate field!");
            }
            if (!creatorId) {
                throw new Error("Please ckeck the creator_id field!");
            }
        }

        const [day, mounth, year] = scheduleDate.split("/")
        const limit_date: Date = new Date(`${year}-${mounth}-${day}`)
        const checkDate: number = limit_date.getTime() - Date.now()

        if (checkDate < 0) {
            errorCode = 422
            throw new Error("Please check your schedule date field.");
        }

        const id: string = Date.now().toString()

        await connection("tasks_todolist")
            .insert({
                id,
                title,
                description,
                limit_date,
                creator_id: creatorId
            })

        res.send({ message: "Task added!", identificador: id })

    } catch (error) {
        console.log(error.sqlmessage)
        res.status(errorCode).send({ message: error.message })
    }
}

export default addTask