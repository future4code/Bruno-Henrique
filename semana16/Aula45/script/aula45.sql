SELECT * FROM Actor;

UPDATE Actor
SET
name = "Antônio Fagundes",
birth_date = "1959-06-11",
gender = "male"
WHERE id = 003; 

UPDATE Actor
SET name = UPPER(name)
WHERE name = "Juliana Paes" ;

UPDATE Actor
SET name = "Juliana Paes "
WHERE name = "Juliana Paes" ;

UPDATE Actor
SET 
name = "Regina Duarte",
salary = 370000,
birth_date = "1965-09-30",
gender = "female"
WHERE id = 005;

UPDATE Actor
SET 
name = "Moacyr Franco",
salary = 670000,
birth_date = "1945-09-30",
gender = "male"
WHERE id = 008;

DELETE from Actor
WHERE name = "Regina Duarte";

DELETE from Actor
WHERE salary > 1000000 AND gender = "male";

DELETE from Actor
WHERE salary > 500000 AND gender = "male";

SELECT MAX(salary) from Actor;

SELECT MIN(salary) as Menor_salario
from Actor
WHERE gender = "female";

SELECT COUNT(*) FROM Actor
WHERE gender = "female";

SELECT SUM(salary) from Actor;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

SELECT id, name FROM Actor
WHERE GENDER = "male"
ORDER BY name ASC;

SELECT * FROM Actor
ORDER BY salary ASC;

SELECT id, name FROM Actor
ORDER BY salary DESC
LIMIT 3;

SELECT AVG(salary) as media_salarial , gender
from Actor
GROUP BY gender;

SELECT * FROM Movies;

DESCRIBE Movies;

ALTER TABLE Movies ADD playing_limit_date Date;

ALTER TABLE Movies CHANGE rating rating FLOAT;

UPDATE Movies
SET 
playing_limit_date = curdate()
WHERE id = 002;

UPDATE Movies
SET 
playing_limit_date = "2021-03-13"
WHERE id = 004;

DELETE FROM Movies
WHERE id = 004;

UPDATE Movies
SET
sinopse = "Alterado"
WHERE id = 004;

