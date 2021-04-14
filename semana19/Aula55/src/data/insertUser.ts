import { connection } from "../data/connection";
import { userDTO } from "../model/user";

export const insertUser = async (
   user: userDTO
) => {
   await connection.insert({
      id: user.id,
      name: user.name,
      nickname: user.nickname,
      email: user.email,
      password: user.password,
      role: user.role
   }).into('to_do_list_users')
}