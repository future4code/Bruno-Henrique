# Aula 47 - Relações em SQL

### Exercico 1

**a.**
Chave estrangeira ou FOREIGN KEY é a forma de relacionar duas tabelas.

**b.**
~~~SQL
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating(id, comment, rate, movie_id)
VALUES(
	"001",
    "Otima comédia",
    8,
    "001"
);
~~~

**c.**
~~~SQL
INSERT INTO Rating(id, comment, rate, movie_id)
VALUES(
	"002",
    "Muito confuso",
    5.5,
    "009"
);
~~~
***Mensagem de Erro
Cannot add or update a child row: a foreign key constraint fails 
(`epps-bruno-silva`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))***

**Reposta**
Após executar a query a mensagem de erro acima foi exibida. Não foi possivel inserir aquelas informações
pois não foi encontrado a chave de referencia informada, ou seja, o banco restringiu a adição de dados na tabela Rating.

**d.**
~~~SQL
ALTER TABLE Movies
DROP COLUMN rating;
~~~

**e.**
~~~SQL
DELETE from Movies
WHERE id = "001";
~~~
***Mensagem de Erro
Cannot delete or update a parent row: a foreign key constraint fails 
(`epps-bruno-silva`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))***

**Reposta**
Após executar a query a mensagem de erro acima foi exibida. O banco não executou a query pois existe uma chave estrangeira vinculada a tabela que seria editada.

________________________________________________________________________________________________________

### Exercico 2

**a.**
~~~SQL
CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
~~~
**Reposta**
A tabela criada acima irá referenciar a outras duas tabelas. Atraves dela podemos obter informações que são conjuntas.

**b.**
~~~SQL
INSERT into MovieCast(movie_id, actor_id)
VALUES(
	"001",
    "002"
);
~~~

**c.**
~~~SQL
INSERT into MovieCast(movie_id, actor_id)
VALUES(
	"010",
    "002"
);
~~~
***Mensagem de Erro
Cannot add or update a child row: a foreign key constraint fails (`epps-bruno-silva`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))***

**Reposta**
Após executar a query a mensagem de erro acima foi exibida. O banco não executou a query pois uma das chaves vinculadas esta errada/não existe. O movie_id não existe na tabela Movies.

**d.**
~~~SQL
DELETE FROM Actor
WHERE id = "002";
~~~
***Mensagem de Erro
Cannot delete or update a parent row: a foreign key constraint fails (`epps-bruno-silva`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))***

**Reposta**
Após executar a query a mensagem de erro acima foi exibida. O banco não executou a query pois o id informado para deletar está vinculado a outra tabela.

________________________________________________________________________________________________________

### Exercico 3