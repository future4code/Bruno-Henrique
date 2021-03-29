import app from "./app"
import { getAllUsers } from "./endpoints/getAllUsers"
import {getUserByName} from "./endpoints/getUserByName"
import { getUserByType } from "./endpoints/getUserByType"
import { getUsersOrderBy } from "./endpoints/getUsersOrderBy"


app.get("/user/all", getAllUsers)

app.get("/user/searchByName", getUserByName)

app.get("/user/:type", getUserByType)

app.get("/user/search", getUsersOrderBy)