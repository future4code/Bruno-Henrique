import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { clients, client, details } from "./clients/clients"

const app: Express = express();
app.use(express.json());
app.use(cors());

//Pegar saldo
app.get("/cliente/saldo", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name: string = req.query.name as string
        const cpf: string = req.query.cpf as string

        if (!name || !cpf) {
            errorCode = 422
            throw new Error("Invalid parameters! Please check the fields.");
        }

        const accountIndex = clients.findIndex((user) => {
            return (user.name === name && user.cpf === Number(cpf))
        })

        if (accountIndex < 0) {
            errorCode = 404
            throw new Error("Client not found");
        }

        res.status(200).send({ status: "Success!", Saldo: `${clients[accountIndex].currentMoney}` })

    } catch (error) {
        res.status(errorCode).send({ status: "FAILED", message: error.message })
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