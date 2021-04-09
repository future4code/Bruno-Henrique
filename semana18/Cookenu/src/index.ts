import app from "./app"
import createAccount from "./endpoint/createAccount"
import getProfile from "./endpoint/getProfile"
import getUserProfile from "./endpoint/getUserProfile"
import login from "./endpoint/login"

app.post("/signup", createAccount)
app.post("/login", login)

app.get("/user/profile", getProfile)
app.get("/user/:id", getUserProfile)