import { Request, Response } from "express"
import connection from "../connection"

const createUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {

        if (!req.body.name || !req.body.nickname || !req.body.email) {
            errorCode = 422
            if (!req.body.name) {
                throw new Error("Invalid parameters! Please check the name field.");
            }
            if (!req.body.nickname) {
                throw new Error("Invalid parameters! Please check the nickname field.");
            }
            if (!req.body.email) {
                throw new Error("Invalid parameters! Please check the email field.");
            }
        }

        const { name, nickname, email } = req.body

        await connection.raw(
            `INSERT INTO users_todolist(id, name, nickname, email)
             VALUES(
                "user${Date.now()}",
                "${name}",
                "${nickname}",
                "${email}"
            );`
        )

        res.status(201).send("Success! User created.")
        
    } catch (error) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
}

export default createUser;