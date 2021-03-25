import app from "./app"

app.get("/", (req, res)=>{
    res.send("Rodando suave")
})