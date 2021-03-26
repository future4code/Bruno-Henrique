SELECT title, Rating.id, rate, comment 
FROM Movies
LEFT JOIN Rating ON Movies.id = Rating.movie_id;

SELECT Movies.id, title, actor_id 
FROM Movies
JOIN MovieCast 
ON movie_id = actor_id;

SELECT title, AVG(Rating.rate) as Media 
FROM Movies
LEFT JOIN Rating
ON Movies.id = Rating.movie_id
GROUP BY Movies.id
;