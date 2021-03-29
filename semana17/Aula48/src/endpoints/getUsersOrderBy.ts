import { Request, Response } from "express"
import selectUserOrderBy from "../data/selectUserOrderBy"


export const getUsersOrderBy = async (req: Request, res: Response): Promise<void> => {
    try {

        let orderBy = req.query.orderBy as string         //name, type ou email (default)
        let orderType = req.query.orderType as string      //ASC (default) ou DESC
        const searchName = req.query.name as string

        if (!searchName) {
            res.statusCode = 422
            throw new Error("Please check searchBy field!"); 
        }

        if(orderBy !== "name" && orderBy !== "type" ){
            orderBy = "email";    
        }

        if(orderType.toUpperCase() !== "ASC" && orderType.toUpperCase() !== "DESC" ){
            orderType = "ASC";    
        }

        const users = await selectUserOrderBy(searchName, orderBy, orderType)

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