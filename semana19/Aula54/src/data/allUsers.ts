import connection from "../connection";

export default async function allUsers(): Promise<any> {
    try {

        const user = await connection("User_Arq")

        return user

    } catch (error) {
        throw new Error("Internal server error!");
    }

}