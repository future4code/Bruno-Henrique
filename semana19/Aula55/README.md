# Aula 55 - Arquitetura de software

### Exercício 4

**a. Precisamos criar outra modelagem aqui?**
Sim. Porque após todas a validações na camada de business, para armazenar os dados do usuario no banco precisamos gerar um id unico para este usuario. 

~~~javascript
export type userDTO = {
   id: string,
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: USER_ROLES
}
~~~

**b. Precisamos gerar alguma outra alteração no nosso código?**
Após criado esse modelo podemos tipar/modelar os dados no que a query recebe antes de enviar para o banco.

~~~javascript
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
~~~