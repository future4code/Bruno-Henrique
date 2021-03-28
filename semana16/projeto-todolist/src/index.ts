import app from "./app"
import connection from "./connection"
import addTask from "./endpoints/addTask"
import createUser from "./endpoints/createUser"
import editUserById from "./endpoints/editUserById"
import searchUserById from "./endpoints/searchUserById"
import searchUserTasks from "./endpoints/searchUserTasks"

app.put("/user", createUser)

app.get("/user/:id", searchUserById)

app.post("/user/edit/:id", editUserById)

app.put("/task", addTask)

app.get("/task/:id", searchUserTasks);