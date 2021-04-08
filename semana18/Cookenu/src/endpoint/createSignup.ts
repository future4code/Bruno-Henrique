import { Request, Response } from "express"


export default async function createSignup(req: Request, res: Response): Promise<void> {
    try {



    } catch (error) {

        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }

}