import app from "./app"
import connection from "./connection"

app.put("/user", async (req, res) => {
    let errorCode = 400
    try {

        if (!req.body.name || !req.body.nickname || !req.body.email) {
            errorCode = 422
            if (!req.body.name) {
                throw new Error("Invalid parameters! Please check the name field.");
            }
            if (!req.body.nickname) {
                throw new Error("Invalid parameters! Please check the nickname field.");
            }
            if (!req.body.email) {
                throw new Error("Invalid parameters! Please check the email field.");
            }
        }

        const { name, nickname, email } = req.body

        await connection.raw(
            `INSERT INTO users_todolist(id, name, nickname, email)
             VALUES(
                "user${Date.now()}",
                "${name}",
                "${nickname}",
                "${email}"
            );`
        )

        res.status(201).send("Success! User created.")
    } catch (error) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
})

app.get("/user/:id", async (req, res) => {
    let errorCode = 400
    try {
        const id = req.params.id

        if (!id) {
            errorCode = 422
            throw new Error("Invalid parameters! Please check the id field.");
        }

        const results = await connection.raw(`
        SELECT id, nickname FROM users_todolist
        WHERE id = "${id}";
        `)

        if (results[0].length === 0) {
            errorCode = 404
            throw new Error("User not found");
        }

        res.status(200).send(results[0])


    } catch (error) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
})

app.post("/user/edit/:id", async (req, res) => {
    let errorCode = 400
    try {

        const results = await connection("users_todolist")
            .update({
                name: req.body.name,
                nickname: req.body.nickname,
                email: req.body.email
            })
            .where({ id: req.params.id })

        res.status(200).send("Updated!")

    } catch (error) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
})

app.put("/task", async (req, res) => {
    let errorCode = 400
    try {
        const { id, title, description, scheduleDate, creator_id } = req.body
        const [day, mounth, year] = scheduleDate.split("/")
        const limit_date: Date = new Date(`${year}-${mounth}-${day}`)

        await connection("tasks_todolist")
            .insert({
                id,
                title,
                description,
                limit_date,
                creator_id
            })

        res.send("Task added!")

    } catch (error) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
})

app.get("/task/:id", async (req, res) => {
    let errorCode = 400
    try {
        const result = await connection.raw(`
        SELECT tasks_todolist.id as TaskId, title, description, limit_date, users_todolist.id as UserId, nickname 
        FROM users_todolist
        JOIN tasks_todolist ON "${req.params.id}" = creator_id
        `);

        res.send(result[0])

    } catch (error) {
        console.log(error.message)
        res.status(errorCode).send(error.message)
    }
});