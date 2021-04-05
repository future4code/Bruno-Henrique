import connection from "../connection";

async function createUser(id: string, email: string, password: string) {
    await connection("Users")
        .insert({
            id,
            email,
            password
        })
}