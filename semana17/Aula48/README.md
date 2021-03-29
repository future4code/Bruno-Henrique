# Aula 48 - Filtros, Ordenação e Paginação

## Exercícios de Tarde

#### Criar o banco que será usado e adicionar entradas
~~~SQL
CREATE TABLE aula48_exercicio(
id INT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
type VARCHAR(255) NOT NULL
);

INSERT INTO aula48_exercicio (`id`,`name`,`email`,`type`) VALUES (1,'Soter','soter@labenu','Teacher');
INSERT INTO aula48_exercicio (`id`,`name`,`email`,`type`) VALUES (2,'João','joao@labenu','Teacher');
~~~
...

#### Criar o endpoint para pegar todos os usuarios e aquery do endpoint

~~~javascript
import {Request, Response} from "express"
import selectAllUsers from "../data/selectAllUsers"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("User not found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }
~~~
~~~javascript
import connection from "../connection"

export default async function selectAllUsers():Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio;
   `)

   return result[0]
}
~~~

_____________________________________________________________________________________________________

#### Exercico 1

**a.** Crie uma cópia do endpoint acima, e altere-o para que ele possa receber um parâmetro de filtragem por **nome**. Este nome deve ser enviado por **query params**.

~~~javascript
import { Request, Response } from "express"
import selectUserByName from "../data/selectUserByName"

export const getUserByName = async (req: Request, res: Response): Promise<void> => {
    try {
        const userName = req.query.name as string

        if(!userName){
            res.statusCode = 422
            throw new Error("Please check search by name field!");            
        }

        const user = await selectUserByName(userName)

        if (!user.length) {
            res.statusCode = 404
            throw new Error("User not found")
        }

        res.status(200).send(user)

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}
~~~

~~~javascript
import connection from "../connection"

export default async function selectUserByName(userName: string): Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      WHERE name LIKE "%${userName}%";
   `)

   return result[0]
}
~~~

**b.** Crie mais uma cópia do endpoint acima, e agora permita que haja filtragem por **tipo** de user. O tipo de user deve ser passado por **path params.**

