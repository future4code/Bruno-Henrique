import app from "./app"
import createSignup from "./endpoint/createSignup"
import getProfile from "./endpoint/getProfile"
import getUserByEmail from "./endpoint/getUserByEmail"
import login from "./endpoint/login"

app.post("/user/signup", createSignup)
app.get("/userByemail", getUserByEmail)
app.post("/user/login", login)
app.get("/user/profile", getProfile)