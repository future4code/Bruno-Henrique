import * as jwt from "jsonwebtoken"
import { ROLE_TYPE } from "../types/signup"

export type AuthenticationData = {
   id: string,
   role: ROLE_TYPE
}

export function generateToken(
   payload: AuthenticationData
): string {
   return jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      {
         expiresIn: "24min"
      }
   )
}

export function getTokenData(
   token: string
): AuthenticationData {
   return jwt.verify(
      token,
      process.env.JWT_KEY as string
   ) as AuthenticationData
}