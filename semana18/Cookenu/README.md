# Semana 18 - Cookenu

### Enunciado
Esse produto nada mais é do que uma rede social, na qual os usuários podem dividir informações relevantes sobre comidas e receitas que tenham experimentado. Ela possui todas as funcionalidades mais comuns em redes sociais.

### Endpoints
- Cadastro - Necessário informar nome, email e senha(no mínimo 6 carácteres);
- Login - Necessário informar email e senha. A resposta do endpoint deve devolver um token;
- Informações do próprio perfil - Com o token o usuari será capaz de visualizar algumas informações pessoais salvas no banco(id e email);
- Criar receitas - Adicionar receitas informando o titulo, descrição/modo de preparo e ata de criação (DD/MM/YYYY);
- Seguir usuário - Deve fornecer o id do usuário que deseja seguir;
- Feed - Um usuário deve poder visualizar as receitas criadas pelos usuários que ele segue. As receitas devem estar ordenadas pela data de criação;

### Requisitos minimos de implementação
#### Signup:
Método: POST
Path: `/signup`

**Entradas:**

Body

```json
{
	"name": "Alice",
	"email": "alice@lbn.com",
	"password": "123456"
}
```

**Saídas**

Body

```json
{
	"access_token": "token de acesso"
}
```
**Observações**:
- O código deve validar se os três campos estão completos (ou seja se não foram enviados ou se não estão vazios) e retornar um erro caso não estejam válidos;
- O código deve gerar o id do usuário

____
#### Login
Método: POST
Path: `/login`

**Entradas:**

Body

```json
{
	"email": "alice@lbn.com",
	"password": "123456"
}
```

**Saídas**

Body

```json
{
	"access_token": "token de acesso"
}
```
**Observações**:
- O código deve validar se os dois campos estão completos (ou seja se não foram enviados ou se não estão vazios) e retornar um erro caso não estejam válidos;

____
#### Pegar o proprio perfil
Método: GET
Path: `/user/profile`

**Entradas:**

Headers

```
Authorization: "token de autenticação"
```

**Saídas**

Body

```json
{
	"id": "id do usuário",
	"name": "Alice",
	"email": "alice@lbn.com"
}
```
____
#### Pegar o perfil de outro usuario
Método: GET
Path: `/user/:id`

**Entradas:**

Path Param

```
id: "id do usuário"
```

Headers

```
Authorization: "token de autenticação"
```

**Saídas**

Body

```json
{
	"id": "id do usuário",
	"name": "Alice",
	"email": "alice@lbn.com"
}
```

____
#### Criar receita
Método: POST
Path: `/recipe`

**Entradas:**

Headers

```
Authorization: "token de autenticação"
```

Body

```json
{
	"title": "título da receita",
	"description": "descrição da receita"
}
```
**Observações**:
- Perceba que, no banco de dados, devemos guardar a data de criação da receita, mas o usuário não envia. Você deve assumir que a receita foi criada no momento em que o usuário bate nessa requisição

____
#### Pegar receita
Método: GET
Path: `/recipe/:id`

**Entradas:**

Path Param

```
id: "id da receita"
```

Headers

```
Authorization: "token de autenticação"
```

**Saídas**

Body

```json
{
	"id": "id da receita",
	"title": "Ovo Frito",
	"description": "Pega o ovo, põe na frigideira e reza!"
	"createdAt": "31/12/2020"
}
```