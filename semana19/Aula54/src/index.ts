import app from "./app"
import dotenv from "dotenv"
dotenv.config()

import signup from "./endpoints/signup"
import login from "./endpoints/login"
import getAllUsers from "./endpoints/getAllUsers"
import deleteUserById from "./endpoints/deleteUserById"


app.post("/signup", signup)
app.post("/login", login)
app.get("/all", getAllUsers)
app.delete("/delete/:id", deleteUserById)