import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users, user } from "./users"


const app: Express = express();
app.use(express.json());
app.use(cors());


//Exercicio1
//a. Qual método HTTP você deve utilizar para isso? Reps.: Usaria o metodo GET
//b. Como você indicaria a entidade que está sendo manipulada? Resp. Usaria somente o /users
app.get("/users", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        res.status(201).send(users)
    } catch (error) {
        res.status(errorCode).send({ status: "FAILED", maessage: error.maessage })
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});