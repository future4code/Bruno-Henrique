import { Request, Response } from "express"
import selectUserByType from "../data/selectUserByType";


export const getUserByType = async (req: Request, res: Response): Promise<void> => {
    try {
        const userType = req.query.type as string

        if(!userType){
            res.statusCode = 422
            throw new Error("Please check search by name field!");            
        }

        const user = await selectUserByType(userType)

        if (!user.length) {
            res.statusCode = 404
            throw new Error(`User with "${userType}" type not found`)
        }

        res.status(200).send(user)

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}