import connection from "../connection";

export default async function userCheck(email: string): Promise<any> {
    try {

        const [user] = await connection("User_Arq")
            .where({ email })

        return user

    } catch (error) {
        throw new Error("Internal server error!");
    }

}