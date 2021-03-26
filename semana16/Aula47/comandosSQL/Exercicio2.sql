CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT into MovieCast(movie_id, actor_id)
VALUES(
	"001",
    "002"
);

INSERT into MovieCast(movie_id, actor_id)
VALUES(
	"001",
    "001"
);

INSERT into MovieCast(movie_id, actor_id)
VALUES(
	"003",
    "003"
);

INSERT into MovieCast(movie_id, actor_id)
VALUES(
	"002",
    "007"
);

INSERT into MovieCast(movie_id, actor_id)
VALUES(
	"002",
    "001"
);

INSERT into MovieCast(movie_id, actor_id)
VALUES(
	"003",
    "004"
);

INSERT into MovieCast(movie_id, actor_id)
VALUES(
	"010",
    "002"
);

DELETE FROM Actor
WHERE id = "002";


