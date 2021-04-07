import { Request, Response } from "express"
import selectAllUsersLimit from "../data/selectAllUsersLimit"

export const getAllUsersLimit = async (req: Request, res: Response): Promise<void> => {
    try {
        let limit: number = Number(req.query.limit as string)
        let page: number = Number(req.query.page as string)

        if (isNaN(limit) || limit < 1) {
            limit = 5
        }

        if (isNaN(page) || page < 1) {
            page = 1
        }

        const offset: number = limit * (page - 1)

        const users = await selectAllUsersLimit(limit, offset)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("User not found")
        }

        res.status(200).send(users)

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}