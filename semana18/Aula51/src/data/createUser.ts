import connection from "../connection";

async function createUser(id: string, email: string, password: string, role: string) {
    await connection("Users")
        .insert({
            id,
            email,
            password,
            role
        })
}

export default createUser