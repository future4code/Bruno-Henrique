import app from "./app"
import getActorsList from "./endpoints/getActorsList"
import getMoviesList from "./endpoints/getMoviesList"
import updateActor from "./endpoints/updateActor"

app.get("/allActors",getActorsList)

app.get("/allMovies", getMoviesList)

app.put("/actor/:id", updateActor)