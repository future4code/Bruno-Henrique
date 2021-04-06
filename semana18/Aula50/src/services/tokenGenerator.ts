import * as jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { jwtAuthentication } from "../types"

dotenv.config()

export const tokenGenerator = (payload: jwtAuthentication): string => {
    return jwt.sign(
        payload,
        process.env.JWT_KEY as string,
        { expiresIn: "24h" }
    )
}

export const getTokenData = (token: string): jwtAuthentication | null => {
    try {

        const { id } = jwt.verify(token, process.env.JWT_KEY as string) as jwtAuthentication

        return { id }

    } catch (error) {
        console.log(error.message);
        return null
    }
}