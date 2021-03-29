import { Request, Response } from "express"
import selectUserByName from "../data/selectUserByName"

export const getUserByName = async (req: Request, res: Response): Promise<void> => {
    try {
        const userName = req.query.name as string

        if(!userName){
            res.statusCode = 422
            throw new Error("Please check search by name field!");            
        }

        const user = await selectUserByName(userName)

        if (!user.length) {
            res.statusCode = 404
            throw new Error("User not found")
        }

        res.status(200).send(user)

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}