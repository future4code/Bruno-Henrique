import { Request, Response } from "express"
import connection from "../connection"

const editUserById = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {

        const { name, nickname, email } = req.body

        if (name === "" || nickname === "" || email === "") {
            errorCode = 422
            throw new Error("Please check your fields. They cannot be blank!");
        }

        await connection("users_todolist")
            .update({
                name,
                nickname,
                email
            })
            .where({ id: req.params.id })

        res.status(200).send({ message: "Updated!" })

    } catch (error) {
        console.log(error.sqlmessage)
        res.status(errorCode).send({ message: error.message })
    }
}

export default editUserById