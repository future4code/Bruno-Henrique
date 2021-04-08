import axios from 'axios'
import { baseURL } from '../constants/baseURL'
import { userAddress } from '../types'


async function getAddressInfo(codigo: string): Promise<userAddress | null> {
    try {
        const result = await axios.get(`${baseURL}/${codigo}/json`)

        const { cep, logradouro, bairro, localidade, uf } = result.data

        return ({
            CEP: cep,
            Logradouro: logradouro,
            Bairro: bairro,
            Cidade: localidade,
            Estado: uf
        })

    } catch (error) {
        console.log(error.message)
        return null
    }

}

export default getAddressInfo
