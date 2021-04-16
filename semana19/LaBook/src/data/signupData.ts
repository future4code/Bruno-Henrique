import { user } from "../model/userModel"
import { connection } from "./connection"

export const signupData = async (user: user) => {

    try {
        await connection('labook_users')
        .insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        })
        
    } catch (error) {
        console.log("Estou dentro de signupData")        
    }


}
