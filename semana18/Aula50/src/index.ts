import app from "./app"
import createSignup from "./endpoint/createSignup"

app.post("/user/signup", createSignup)