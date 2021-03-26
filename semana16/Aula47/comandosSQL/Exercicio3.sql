SELECT * FROM Movies; 

SELECT * FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;

SELECT Movies.id, title, rate 
FROM Movies
INNER JOIN Rating ON Movies.id = Rating.movie_id
ORDER BY Movies.id ASC;