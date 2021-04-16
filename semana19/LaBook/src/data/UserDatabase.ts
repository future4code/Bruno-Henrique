import { connection } from "./connection"
import { user } from "../model/userModel"

export class UserDatabase {

    constructor() {

    }

    async signup(user: user): Promise<void> {

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

    async checkUser(email: string): Promise<user | undefined> {

        try {
            const [user] = await connection("labook_users")
                .select("*")
                .where({ email })

            return user

        } catch (error) {
            console.log("Estou dentro do checkUser")
        }
    }
}