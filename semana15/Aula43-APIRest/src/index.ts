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

//Exercicio 3
//a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui? Resp.: Query Params

//b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum
//usuário tenha sido encontrado.

app.get("/users/search", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const userType: string = req.query.type as string
        const userName: string = req.query.name as string

        if (!userType && !userName) {
            errorCode = 422
            throw new Error("Please check your request value!");
        }
        let results: user[] = []

        // if (userType && userName) {
        //     results = users.filter((user) => {
        //         if (user.type === userType && user.name === userName) {
        //             return user
        //         }
        //     })
        //     if (results.length === 0) {
        //         errorCode = 404
        //         throw new Error(`Type or Name not found`);
        //     }
        //     res.status(201).send({ status: "Success", results })
        // }

        if (userType) {
            results = users.filter((user) =>
                user.type === userType
            )
        }

        if (userName) {
            results = users.filter((user) =>
                user.name === userName
            )
        }

        if (results.length === 0) {
            errorCode = 404
            throw new Error(`Type or Name not found`);
        }
        res.status(201).send({ status: "Success", results })

    } catch (error) {
        res.status(errorCode).send({ status: "FAILED", message: error.message })
    }
})

//Exercicio 4
//a. Mude o método do endpoint para `PUT`. O que mudou? Resp.: Usnado o metodo Post ou Put
//a requisição foi atendida.

//b. Você considera o método PUT apropriado para esta transação? Por quê?
//Resp.: Acredito que não. Porque neste caso de criação de um novo usuario por exemplo,
//a ideia seria criar um novo recurso da aplicação e não atualizar.

app.post("/users/create", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        if (!req.body.name || !req.body.email || !req.body.type || !req.body.age) {
            errorCode = 422
            throw new Error("Missing parameters! Please check the fields.");
        }
        const newUser: user = {
            id: Date.now(),
            name: req.body.name,
            email: req.body.email,
            type: req.body.id,
            age: req.body.age
        }
        users.push(newUser)
        res.status(201).send({ status: "Success!" })

    } catch (error) {
        res.status(errorCode).send({ status: "FAILED", message: error.message })
    }
})

app.put("/users/edit/:id", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userId: number = Number(req.params.id)
        if (isNaN(userId)) {
            errorCode = 404
            throw new Error("User not found");
        }

        const userIndex: number = users.findIndex((user) => (
            user.id === userId
        ))

        if (userIndex < 0) {
            errorCode = 404
            throw new Error("User not found");
        }
        
        users[userIndex].name = `${users[userIndex].name}-ALTERADO`

        res.status(201).send()

    } catch (error) {
        res.status(errorCode).send({ status: "FAILED", message: error.message })

    }
})

app.patch("/users/edit/:id/sqn", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userId: number = Number(req.params.id)
        if (isNaN(userId)) {
            errorCode = 404
            throw new Error("User not found");
        }

        const userIndex: number = users.findIndex((user) => (
            user.id === userId
        ))

        if (userIndex < 0) {
            errorCode = 404
            throw new Error("User not found");
        }
        
        users[userIndex].name = `${users[userIndex].name}-REALTERADO`

        res.status(201).send()

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