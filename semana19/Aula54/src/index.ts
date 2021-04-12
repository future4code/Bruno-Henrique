import app from "./app"
import dotenv from "dotenv"
dotenv.config()

import signup from "./endpoints/signup"


app.post("/signup", signup)