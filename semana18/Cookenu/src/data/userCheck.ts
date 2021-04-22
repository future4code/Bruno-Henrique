import connection from "../connection";

async function userCheck(email: string) {
    const [user] = await connection("cookenu_users")
        .where({ email })   

    return user
}

export default userCheck