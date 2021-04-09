import app from "./app"
import createAccount from "./endpoint/createAccount"

app.post("/signup", createAccount)