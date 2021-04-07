import { Request, Response } from "express";
import getAddressInfo from "../data/getAddressInfo";

export default async function getAddress(req: Request, res: Response): Promise<any> {
    try {

        const cep: string = req.params.cep

        if (!cep) {
            res.statusCode = 401
            throw new Error("Informe o CEP.")
        }

        const address = await getAddressInfo(cep)

        res.status(200).send({ Endereco: address })

    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}