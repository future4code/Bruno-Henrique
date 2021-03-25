import app from "./app"
import getActorsList from "./endpoints/getActorsList"
import getMoviesList from "./endpoints/getMoviesList"
import updateActor from "./endpoints/updateActor"

app.get("/actor",getActorsList)

app.get("/movies", getMoviesList)

app.put("/actor/:id", updateActor)