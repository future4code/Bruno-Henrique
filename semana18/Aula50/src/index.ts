import app from "./app"
import createSignup from "./endpoint/createSignup"
import getUserByEmail from "./endpoint/getUserByEmail"
import login from "./endpoint/login"

app.post("/user/signup", createSignup)
app.get("/userByemail", getUserByEmail)
app.post("/user/login", login)