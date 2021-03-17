import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { countries } from './countries'

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get('/countries/all', (req: Request, res: Response) => {
    const myCountries = countries;

    const results = myCountries.map((ct) => ({
        ctId: ct.id,
        ctName: ct.name
    }));
    res.status(201).send(results).end()
})

app.get('/countries/:id', (req: Request, res: Response) => {
    const id: number = Number(req.params.id)
    const results = countries.filter((ct) => {
        return ct.id === id
    })
    res.status(201).send(results).end()
})

// esse código + essa importação para criar o servidor:
// por performance, é bom o servidor ser o último trecho de código do documento
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});