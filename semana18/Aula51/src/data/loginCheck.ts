import connection from "../connection";
import { userLogin } from "../types";

async function loginCheck(email: string) {
    const [user] = await connection("Users")
        .where({ email })

    return user
}

export default loginCheck