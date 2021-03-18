import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users, user, USER_TYPE } from "./users"


const app: Express = express();
app.use(express.json());
app.use(cors());


//Exercicio 1
//a. Qual método HTTP você deve utilizar para isso? Reps.: Usaria o metodo GET

//b. Como você indicaria a entidade que está sendo manipulada? Resp. Usaria somente o /users

app.get("/users", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        res.status(201).send(users)
    } catch (error) {
        res.status(errorCode).send({ status: "FAILED", message: error.message })
    }
})

//Exercico 2
//a. Como você passou os parâmetros de type para a requisição? Por quê?
//Resp. Passei por query params. Porque essa requisição no futuro pode ser receber 
//mais paametros de pesquisa. 

//b. Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados?
//Criando o objeto enum USER_TYPE{} e passando ele no momento que eh criado o usuário

app.get("/users/type", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const userType: string = req.query.type as string
        //const userType: string = req.params.type

        if (!userType) {
            errorCode = 422
            throw new Error("Please check your request value!");
        }
        const results = users.filter((user) =>
            user.type === userType
        )

        if (results.length === 0) {
            errorCode = 404
            throw new Error(`Type not found`);
        }
        res.status(201).send({ status: "Success", results })

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