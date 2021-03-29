import connection from "../connection"

export default async function selectUserOrderBy(
   searchName: string,
   orderBy: string,
   orderType: string):Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      WHERE aula48_exercicio.name LIKE "%${searchName}%"
      ORDER BY ${orderBy} ${orderType};
   `)

   return result[0]
}