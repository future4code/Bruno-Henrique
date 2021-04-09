import connection from "../connection";

async function accountCreator(id: string, name: string, email: string, password: string) {
    await connection("cookenu_users")
        .insert({
            id,
            name,
            email,
            password
        })
}

export default accountCreator