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
        res.status(201).send(results).end()
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

        if (countryName) {
            results = results.filter((country) => {
                return country.name.includes(countryName)
            })
            if (results.length !== 0) {
                res.status(201).send(results).end()
            } else {
                errorCode = 404
                throw new Error(`${countryName} not found`);
            }
        }

        if (countryCapital) {
            results = results.filter((country) => {
                return country.capital.includes(countryCapital)
            })
            if (results.length !== 0) {
                res.status(201).send(results).end()
            } else {
                errorCode = 404
                throw new Error(`${countryCapital} not found`);
            }
        }

        if (countryContinent) {
            results = results.filter((country) => {
                return country.continent.includes(countryContinent)
            })
            if (results.length !== 0) {
                res.status(201).send(results).end()
            } else {
                errorCode = 404
                throw new Error(`${countryContinent} not found`);
            }
        }

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
        res.status(201).send(results).end()

    } catch (error) {
        res.status(errorCode).send({ status: "FAILED", message: error.message });
    }
})

// app.get('/countries/search', (req: Request, res: Response) => {
//     try {
//         const countryName: string = req.query.name as string;
//         const countryCapital: string = req.query.capital as string;
//         const countryContinent: string = req.query.continent as string;

//         let results: country[] = countries;

//         if (countryName) {
//             results = results.filter((country) => {
//                 return country.name.includes(countryName)
//             })
//             if (results.length !== 0) {
//                 res.status(201).send(results).end()
//             }else{
//                 errorCode = 404
//                 throw new Error("Country not found");                
//             }
//         }

//     } catch (error) {
//         res.status(errorCode).send({ status: "FAILED", message: error.message });
//     }
// }

// esse código + essa importação para criar o servidor:
// por performance, é bom o servidor ser o último trecho de código do documento

app.listen(3003, () => {
    console.log("Servidor rodando no endereço http://localhost:3003");
});

// const server = app.listen(process.env.PORT || 3003, () => {
//     if (server) {
//         const address = server.address() as AddressInfo;
//         console.log(`Server is running in http://localhost: ${address.port}`);
//     } else {
//         console.error(`Failure upon starting server.`);
//     }
// });