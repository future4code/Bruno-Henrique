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

#### Exercicio 1
**a.** Crie uma cópia do endpoint acima, e altere-o para que ele possa receber um parâmetro de filtragem por **nome**. Este nome deve ser enviado por **query params**.
**b.** Crie mais uma cópia do endpoint acima, e agora permita que haja filtragem por **tipo** de user. O tipo de user deve ser passado por **path params.**

#### Exercicio 2
Faça uma cópia do endpoint original, e adicione a ele a funcionalidade de ordenação que possa receber nome ou tipo de user. A ordenação padrão deve ser crescente, e caso o usuário não passe nenhum parâmetro, a ordenação deve ser por email.

#### Exercicio 3
Gere uma cópia do endpoint original, e faça com que ele exiba apenas 5 users por vez, e permita que o usuário possa passar a página que deseja ver. O número da página deve ser passado por **query params**.

#### Exercicio 4
Crie um último endpoint que possua todas as funcionalidades acima (as duas filtragens, a ordenação e a paginação). Atribua valores padrão para filtragem, ordenação e paginação para que:

- Caso o usuário não forneça parâmetro de filtragem, o endpoint busque todos os users;
- Caso o usuário não forneça parâmetro de ordenação, o endpoint ordene por **nome** em ordem **decrescente;**
- Caso o usuário não forneça número de página, deve começar na página 1

