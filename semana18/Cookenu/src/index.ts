import app from "./app"
import createAccount from "./endpoint/createAccount"
import login from "./endpoint/login"

app.post("/signup", createAccount)
app.post("/login", login)