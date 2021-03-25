import app from "./app"
import getActorList from "./endpoints/getActorList"
import getMoviesList from "./endpoints/getMoviesList"
import updateActor from "./endpoints/updateActor"

app.get("/actor",getActorList)

app.get("/movies", getMoviesList)

app.put("/actor/:id", updateActor)