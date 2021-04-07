import axios from 'axios'
import { baseURL } from '../constants/baseURL'
import { userAddress } from '../types'


async function getAddressInfo(cep: string): Promise<userAddress | null> {
    try {
        const result = await axios.get(`${baseURL}/${cep}/json`)

        if(!result.data){
            throw new Error("Endereço não encontrado!");            
        }

        const { logradouro, bairro, localidade, uf } = result.data

        return ({
            street: logradouro,
            neighborhood: bairro,
            city: localidade,
            state: uf
        })

    } catch (error) {
        console.log(error.message)
        return null
    }

}

export default getAddressInfo
