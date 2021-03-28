import { Request, Response } from "express"
import connection from "../connection"

const editUserById = async (req: Request, res: Response) => {
    let errorCode = 400
    try {

        const results = await connection("users_todolist")
            .update({
                name: req.body.name,
                nickname: req.body.nickname,
                email: req.body.email
            })
            .where({ id: req.params.id })

        res.status(200).send("Updated!")

    } catch (error) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
}

export default editUserById