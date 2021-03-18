import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { countries, country } from './countries'

const app: Express = express();

app.use(express.json());
app.use(cors());
let errorCode: number = 400;

app.get('/countries/all', (req: Request, res: Response) => {
    const myCountries = countries;
    try {
        const results = myCountries.map((ct) => ({
            ctId: ct.id,
            ctName: ct.name
        }));
        res.status(201).send(results)
    } catch (error) {
        res.status(errorCode).send({ status: "FAILED", message: "Not found" });
    }
})

app.get("/countries/search", (req: Request, res: Response) => {
    try {
        const countryName: string = req.query.name as string;
        const countryCapital: string = req.query.capital as string;
        const countryContinent: string = req.query.continent as string;
        let results: country[] = countries;

        if (!countryName && !countryCapital && !countryContinent) {
            throw new Error("Check your requests data!");
        }

        if (countryName) {
            results = results.filter((country) =>
                country.name.includes(countryName)
            )
        }

        if (countryCapital) {
            results = results.filter((country) =>
                country.capital.includes(countryCapital)
            )
        }

        if (countryContinent) {
            results = results.filter((country) =>
                country.continent.includes(countryContinent)
            )
        }
        if (results.length === 0) {
            throw new Error("Not found!");
        }
        res.status(201).send(results)

    } catch (error) {
        res.status(errorCode).send({ status: "FAILED", message: error.message });
    }
})

app.get('/countries/:id', (req: Request, res: Response) => {
    try {
        const id: number = Number(req.params.id)
        if (isNaN(id)) {
            errorCode = 401
            throw new Error("Invalid Id type! Please check Id value.");
        }
        const results = countries.filter((ct) => {
            return ct.id === id
        })
        if (results.length === 0) {
            throw new Error("Not found!");
        }
        res.status(201).send(results)

    } catch (error) {
        res.status(errorCode).send({ status: "FAILED", message: error.message });
    }
})

app.put("/countries/edit/:id", (req: Request, res: Response) => {
    try {
        if (!req.body.name && !req.body.capital) {
            throw new Error("Check your requests data!");
        }
        const id: number = Number(req.params.id)
        if (isNaN(id)) {
            errorCode = 406
            throw new Error("Invalid Id type! Please check Id value.");
        }

        const countryChange: number = countries.findIndex((ct) =>
            ct.id === id
        )

        if (countryChange === -1) {
            errorCode = 404
            throw new Error()
        }

        const newName: string = req.body.name
        const newCapital: string = req.body.capital

        if (newName) {
            countries[countryChange].name = newName
        }
        if (newCapital) {
            countries[countryChange].capital = newCapital
        }

        res.status(200).send("Country updated!")

    } catch (error) {
        res.status(errorCode).send({ status: "FAILED", message: error.message });

    }
})

app.delete("/countries/:id", (req: Request, res: Response) => {
    try {

        if (!req.headers.authorization) {
            errorCode = 401
            throw new Error("Invalid authorization.");
        }

        const token: string = req.headers.authorization
        const regexAuth = new RegExp('^[A-Za-z0-9].{10,}')
        if (!regexAuth.test(token)) {
            throw new Error("Invalid token!");
        }

        const id: number = Number(req.params.id)
        if (isNaN(id)) {
            errorCode = 406
            throw new Error("Invalid Id! Please check Id value.");
        }

        const countryDelete: number = countries.findIndex((ct) =>
            ct.id === id
        )
        if (countryDelete < 0) {
            errorCode = 404
            throw new Error("Country not found!")
        }

        countries.splice(countryDelete, 1);

        res.status(200).send("Sucess! Country deleted.")

    } catch (error) {
        res.status(errorCode).send({ status: "FAILED", message: error.message });

    }
})

app.post("/countries/create", (req: Request, res: Response) => {
    try {

        if (!req.headers.authorization) {
            errorCode = 401
            throw new Error("Invalid authorization.");
        }

        const token: string = req.headers.authorization
        const regexAuth = new RegExp('^[A-Za-z0-9].{10,}')
        if (!regexAuth.test(token)) {
            throw new Error("Invalid token!");
        }

        if (req.body.name && req.body.capital && req.body.continent) {
            countries.find((ct) => {
                if (ct.name === req.body.name) {
                    errorCode = 400
                    throw new Error("Country already exists!")
                }
            })
            const newCountry: country = {
                id: Date.now(),
                name: req.body.name,
                capital: req.body.capital,
                continent: req.body.continent
            }
            countries.push(newCountry)
            res.status(200).send({message: "Success!", newCountry})

        }
        throw new Error("Invalid body data!");


    } catch (error) {
        res.status(errorCode).send({ status: "FAILED", message: error.message });

    }
})

// esse código + essa importação para criar o servidor:
// por performance, é bom o servidor ser o último trecho de código do documento

// app.listen(3003, () => {
//     console.log("Servidor rodando no endereço http://localhost:3003");
// });

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});