import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { clients, client, details } from "./clients/clients"

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/cliente/all", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        res.status(201).send(clients)

    } catch (error) {
        res.status(errorCode).send({ status: "FAILED", message: error.message })
    }
})

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

//Adicionar saldo
app.put("/cliente/saldo", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name: string = req.query.name as string
        const cpf: string = req.query.cpf as string
        const addValue: string = req.query.value as string
        //const addValue: string = req.body.value

        if (!name || !cpf || !addValue) {
            errorCode = 422
            throw new Error("Invalid parameters! Please check the fields.");
        }

        const accountIndex = clients.findIndex((user) => {
            return (user.name === name && user.cpf === Number(cpf))
        })

        const myAccount: client[] = clients

        if (accountIndex < 0) {
            errorCode = 404
            throw new Error("Client not found");
        }

        const myCurrentValue: number = Number(myAccount[accountIndex].currentMoney)

        clients[accountIndex].currentMoney = myCurrentValue + Number(addValue)

        res.status(200).send({ status: "Success" })

    } catch (error) {
        res.status(errorCode).send({ status: "FAILED", message: error.message })
    }
})

//Pagar conta
app.post("/cliente/pagamentos", (req: Request, res: Response) => {
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

        const myAccount: client[] = clients
        const billValue: number = req.body.value
        const billDescription: string = req.body.info
        const billDate: Date = new Date(req.body.date)

        if (accountIndex < 0) {
            errorCode = 404
            throw new Error("Client not found");
        }

        const billPaid: details = {
            value: billValue,
            date: billDate,
            info: billDescription
        }

        clients[accountIndex].accInfo.push(billPaid)
        clients[accountIndex].currentMoney = myAccount[accountIndex].currentMoney - billValue

        res.status(200).send({ status: "Success" })

    } catch (error) {
        res.status(errorCode).send({ status: "FAILED", message: error.message })
    }
})

//Novo cliente
app.post("/cliente/novaConta", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const clientName: string = req.body.name
        const clientCpf: number = req.body.cpf
        const dateOfBirthday: string = req.body.birthday

        if (!clientName || !clientCpf || !dateOfBirthday) {
            errorCode = 422
            throw new Error("Invalid parameters! Please check the fields.");
        }
        const [day, mounth, year] = dateOfBirthday.split("/")
        const clientBirthday: Date = new Date(`${year}-${mounth}-${day}`)

        const ageTimestamp: number= Date.now() - clientBirthday.getTime()
        const ageInYears: number = ageTimestamp/1000/60/60/24/365

        if(ageInYears < 18){
            errorCode = 401
            throw new Error("The client must be 18 years old or older");            
        }

        const newAccount: client = {
            name: clientName,
            cpf: clientCpf,
            birthday: clientBirthday,
            currentMoney: 0,
            accInfo: []
        }

        clients.push(newAccount)

        res.status(201).send({ status: "Success" })

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