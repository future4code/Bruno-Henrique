
import { Request, Response } from "express"
import connection from "../connection"
import createUser from "../data/createUser"
import getAddressInfo from "../data/getAddressInfo"
import loginCheck from "../data/loginCheck"
import { hash } from "../services/encrypt"
import { idGenerator } from "../services/idGenerator"
import { tokenGenerator } from "../services/tokenGenerator"
import { userSignup, USER_ROLE } from "../types"

export default async function createSignup(req: Request, res: Response): Promise<void> {
    try {

        const { email, password, role } = req.body as userSignup
        let { cep, numero, complemento } = req.body

        if (!email || !password || !role) {
            res.statusCode = 422
            throw new Error("Todos os campos devem ser preenchidos");
        }

        if (!cep || !numero) {
            res.statusCode = 422
            throw new Error("Por favor informe o CEP e o numero");
        }

        if (!complemento) {
            complemento = "Não informado"
        }

        if (!email.includes("@")) {
            res.statusCode = 422
            throw new Error("Informe um email valido!");
        }

        const checkUser = await loginCheck(email)

        if (checkUser) {
            res.statusCode = 422
            throw new Error("Email ja cadastrado.");

        }

        if (password.length < 6) {
            res.statusCode = 422
            throw new Error("Informe uma senha valida! Minimo 6 caracteres ");
        }

        if (role.toUpperCase() !== USER_ROLE.ADMIN && role.toUpperCase() !== USER_ROLE.NORMAL) {
            res.statusCode = 422
            throw new Error("Informe uma 'role' valida!");
        }

        const userId: string = idGenerator()
        const addressId: string = idGenerator()

        const passwordHash = await hash(password)

        await createUser(userId, email, passwordHash, role.toUpperCase())

        const userAddress = await getAddressInfo(cep)

        await connection("users_address")
            .insert({
                id: addressId,
                CEP: userAddress?.CEP,
                Logradouro: userAddress?.Logradouro,
                Numero: numero,
                Complemento: complemento,
                Bairro: userAddress?.Bairro,
                Cidade: userAddress?.Cidade,
                Estado: userAddress?.Estado,
                address_id: userId              
            })

        const token: string = tokenGenerator({ id: userId })

        res.status(201).send({ token: token })

    } catch (error) {

        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }

}