import app from "./app"
import { getAllUsers } from "./endpoints/getAllUsers"
import { getAllUsersLimit } from "./endpoints/getAllUsersLimit"
import { getUserByName } from "./endpoints/getUserByName"
import { getUserByType } from "./endpoints/getUserByType"
import { getUsersOrderBy } from "./endpoints/getUsersOrderBy"


app.get("/user/all", getAllUsers)

app.get("/user/searchByName", getUserByName)

app.get("/user/search", getUsersOrderBy)

app.get("/user/allLimited",getAllUsersLimit)

app.get("/user/:type", getUserByType)
