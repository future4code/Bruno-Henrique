# Aula 50 - Introdução a Autenticação

### Exercicio 1
Na autenticação de usuários o elemento mais fundamental talvez seja o id. É muito importante encontrar um que seja fácil de guardar e que garanta unicidade. Para isso usaremos a versão v4 do UUID, uma das mais recomendadas para isso.

**a.** Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
**Resp.:** Concordo com a utilização de strings ao invés de somente números pois utilizando strings podemos gerar combinações únicas de id. 

**b.** A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.


### Exercicio 2
~~~javascript
const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};
~~~

**a.** Explique o código acima com as suas palavras.
O codigo acima está criando uma função que ao ser chamada irá acessar a tabela ***User*** de um banco de dados e irá inserir uma nova entrada nessa tabela informando id, email e password.

**b.** Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.

~~~SQL
CREATE TABLE Users(
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
);
~~~

**c.** Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.

~~~javascript
import connection from "../connection";

async function createUser(id: string, email: string, password: string) {
    await connection("Users")
        .insert({
            id,
            email,
            password
        })
}
~~~

### Exercicio 3
~~~javascript
import * as jwt from "jsonwebtoken";

const expiresIn = "1min"

const generateToken = (id: string): string => {
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}
~~~

**a.** O que a linha as string faz? Por que precisamos usar ela ali?
Ela está dizendo que o process.env.JWT_KEY é para ser tratado como uma string.

### Exercicio 7
~~~javascript
const expiresIn = "1min";

const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};
~~~

**a.** O que a linha as any faz? Por que precisamos usá-la ali?
Esta dizendo que o retorno do jwt.verify() pode assumir qualquer valor.
