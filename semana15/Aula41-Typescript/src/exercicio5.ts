// Faça uma função que receba dois números como parâmetros e imprima no terminal, as seguintes informações:
// a) A soma desses números
// b) A subtração desses números
// c) A multiplicação desses números
// d) Qual deles é o maior

function manipulaNumeros(num1: number, num2: number): {} {
    type dados = {
        Soma: number,
        Subtracao: number,
        Multiplicacao: number,
        Maior: number
    }
    let sum: number = num1 + num2
    let sub: number = num1 - num2
    let mult: number = num1 * num2
    let maior: number
    if (sub < 0) {
        maior = num2
    } else {
        maior = num1
    }
    const dado: dados = {
        Soma: sum,
        Subtracao: sub,
        Multiplicacao: mult,
        Maior: maior
    }
    return dado
}
console.log(manipulaNumeros(10, 20))