# Aula 52 - Serviços no Backend

### Exercicio 1
Escreva uma função que receba um CEP, faça uma requisição para a url [https://viacep.com.br/ws/:cep/json/](https://viacep.com.br/ws/05424150/json/)  e retorne um objeto contendo:

- Logradouro
- Bairro
- Cidade
- Estado

### Exercicio 2
No seu banco de dados, crie uma tabela para guardar as seguintes informações de endereço de um usuário:

- CEP
- Logradouro
- Número
- Complemento (opcional)
- Bairro
- Cidade
- Estado

~~~SQL
CREATE TABLE users_address(
	id VARCHAR(255) PRIMARY KEY NOT NULL,
    CEP VARCHAR(10) NOT NULL,
    Logradouro VARCHAR(255) NOT NULL,
    Numero INT NOT NULL,
    Complemento VARCHAR(255),
    Bairro VARCHAR(64) NOT NULL,
    Cidade VARCHAR(64) NOT NULL,
    Estado VARCHAR(10) NOT NULL,
    address_id VARCHAR(255),
    FOREIGN KEY (address_id) REFERENCES Users(id)
);
~~~

### Exercicio 3



