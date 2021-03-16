//Exercicio 2
//a. Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts 
//e faça a tipagem desses parâmetros.
//Entrada é um array de numeros e a saida é um objeto.
function obterEstatisticas(numeros: number[]): {} {
    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    type estatisticas = {
        maior: number,
        menor: number,
        media: number
    }

    const estatistica: estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatistica
}

//b. Que outras variáveis compõem essa função? Explicite a tipagem de todas elas.
//numerosOrdenados recebe o array ordenado, soma recebe a somatoria de todos os 
//numeros do array e estatistica é um objeto que será retornado.

//c. Crie um type para representar uma amostra de dados, isto é, um objeto com as chaves numeros e obterEstatisticas.
// Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:
type amostra = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => {}
}

const amostraDeIdade: amostra = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas
}
