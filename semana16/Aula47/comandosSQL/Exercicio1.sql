CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

INSERT INTO Rating(id, comment, rate, movie_id)
VALUES(
	"001",
    "Otima comédia",
    8,
    "001"
);

INSERT INTO Rating(id, comment, rate, movie_id)
VALUES(
	"002",
    "Ri muito!",
    9.5,
    "001"
);

INSERT INTO Rating(id, comment, rate, movie_id)
VALUES(
	"003",
    "Classico",
    8,
    "003"
);


INSERT INTO Rating(id, comment, rate, movie_id)
VALUES(
	"004",
    "Excelente",
    10,
    "001"
);


INSERT INTO Rating(id, comment, rate, movie_id)
VALUES(
	"002",
    "Muito confuso",
    5.5,
    "009"
);

ALTER TABLE Movies
DROP COLUMN rating;

DELETE from Movies
WHERE id = "001";



