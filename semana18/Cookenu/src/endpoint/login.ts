import { Request, Response } from "express"
import userCheck from "../data/userCheck";
import { compare } from "../services/encrypt";
import { tokenGenerator } from "../services/tokenGenerator";
import { account, userLogin } from "../types"


export default async function login(req: Request, res: Response): Promise<any> {
    try {

        const {email, password} = req.body as userLogin

        if (!email || !password) {
            res.statusCode = 422
            throw new Error("Please, check if all fields(email and password) were filled!");
        }

        const user: account = await userCheck(email)

        if(!user){
            res.statusCode = 404
            throw new Error(`Sorry! User ${email} not found.`);            
        }

        const passwordCheck: boolean = await compare(password, user.password)

        if(!passwordCheck){
            res.statusCode = 401
            throw new Error("Sorry! Invalid password.");            
        }

        const token: string = tokenGenerator({id: user.id})

        res.status(200).send({token})

    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}