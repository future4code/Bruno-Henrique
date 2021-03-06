import {Request, Response} from "express"
import connection from "../connection";

const getActorsList = async (req:Request, res:Response) => {
    try {

        const result = await connection.raw(`
            SELECT * FROM Actor
        `)

        res.send(result[0])
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
};

export default getActorsList;