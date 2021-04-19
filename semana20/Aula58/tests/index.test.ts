import { performPuschase } from "../src/exercicios/exercicio1"
import { User } from "../src/model/userModel"

describe("Exercicio 1", () => {
    test("Teste 1 - Saldo maior", () => {

        const user: User = {
            name: "Bruno",
            balance: 250
        }

        expect(performPuschase(user,200)).toEqual({...user, balance: 50})
    })

    test("Teste 2 - Saldo igual", () => {
        
        const user: User = {
            name: "Astrodev",
            balance: 200
        }

        expect(performPuschase(user,200)).toEqual({...user, balance: 0})
    })

    test("Teste 3 - Saldo menor", () => {
        
        const user: User = {
            name: "Rafael",
            balance: 100
        }

        expect(performPuschase(user,200)).toEqual(undefined)
    })
})