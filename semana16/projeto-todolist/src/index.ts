import app from "./app"
import addTask from "./endpoints/addTask"
import createUser from "./endpoints/createUser"
import editUserById from "./endpoints/editUserById"
import getUserById from "./endpoints/getUserById"
import getUserTasks from "./endpoints/getUserTasks"

app.put("/user", createUser)

app.get("/user/:id", getUserById)

app.post("/user/edit/:id", editUserById)

app.put("/task", addTask)

app.get("/task/:id", getUserTasks);