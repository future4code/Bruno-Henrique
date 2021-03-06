import connection from "../connection"

export default async function selectUserByType(userType: string): Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      WHERE type LIKE "%${userType}%";
   `)

   return result[0]
}