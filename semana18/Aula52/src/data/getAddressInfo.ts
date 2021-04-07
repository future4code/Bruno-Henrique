import axios from 'axios'
import { baseURL } from '../constants/baseURL'
import { userAddress } from '../types'


async function getAddressInfo(codigo: string): Promise<userAddress | null> {
    try {
        const result = await axios.get(`${baseURL}/${codigo}/json`)

        if (!result.data) {
            throw new Error("Endereço não encontrado!");
        }

        const { CEP, Logradouro, Bairro, Cidade, uf } = result.data

        return ({
            CEP,
            Logradouro,
            Bairro,
            Cidade,
            Estado: uf
        })

    } catch (error) {
        console.log(error.message)
        return null
    }

}

export default getAddressInfo
