import { Request, Response } from "express"
import connection from "../connection"

const addTask = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { title, description, scheduleDate, creator_id } = req.body

        if (!title || !description || !scheduleDate || !creator_id) {
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
            if (!creator_id) {
                throw new Error("Please ckeck the creator_id field!");
            }
        }

        const [day, mounth, year] = scheduleDate.split("/")
        const limit_date: Date = new Date(`${year}-${mounth}-${day}`)
        const checkDate: number = limit_date.getTime() - Date.now()

        if(checkDate < 0){
            errorCode = 422
            throw new Error("Please check your schedule date field.");            
        }        

        await connection("tasks_todolist")
            .insert({

                title,
                description,
                limit_date,
                creator_id
            })

        res.send({ message: "Task added!" })

    } catch (error) {
        console.log(error.sqlmessage)
        res.status(errorCode).send({ message: error.message })
    }
}

export default addTask