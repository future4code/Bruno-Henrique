# Aula 59 - Testes unitários e Mocks

### Exercício 1

O tema da aula de hoje vai ser um joguinho bem simples de luta. Em um exercício mais para frente, vamos implementar uma função que faça um personagem "bater" no outro. Antes disso, precisamos  fazer uma função que vai validar as informações de cada personagem. Ele deve possuir 4 parâmetros: nome, vida, defesa e força. 

A força representa o quanto o personagem pode tirar de vida do outro. A defesa é um valor que representa o quanto o outro personagem consegue se defender, a conta é simples: quando um personagem ataca  o outro, ele perde o valor `(força - defesa)` da sua vida. Todos os personagens começam com a vida `1500` e, ao chegar no `0`, eles morrem.

*a. Crie uma interface para representar os personagens.*
~~~javascript
export interface Player {
    name: string,
    hp: number,
    atkPower: number,
    defPower: number
}
~~~

*b. Crie uma função `validateCharacter` que valide as informações de um personagem (devolvendo `true` se for válida ou `false` caso contrário). Nenhuma das propriedades pode ser vazia. Em relação a vida, defesa e força, elas só podem possuir valores maiores que 0.*

~~~javascript
import { Player } from "./model/playerModel";

export function validateCharacter(input: Player): boolean {

    if (!input.name || !input.atkPower || !input.defPower || !input.hp) {
        return false
    }

    if (input.hp <= 0 || input.atkPower <= 0 || input.defPower <= 0) {
        return false
    }

    return true

}
~~~