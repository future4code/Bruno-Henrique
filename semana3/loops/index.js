//Exercicio1
//O que o código abaixo está fazendo? Qual o resultado impresso no console?
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// O programa esta somando o valor da variavel "i" a variavel "valor" em vcada interação do loop.
// O resultado impresso será 10

//Exercicio2
//a. Será impresso numeros maiores que 18
//b. Sim. Declarar mais uma variavel que irá armazenar em qual indice esta a variavel e incrementa-la
//em para que atualizar o valor dela.
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// let indiceLista = 0
// for (let numero of lista) {
//   if (numero > 18) {
//         console.log(numero, "Indice" , indiceLista, "do array")
//     }
//     indiceLista++
// }

//Desafio1
//O programa ira imprimir linhas de "0"(string) sendo que para cada interação o numero de zeros nas linhas será 
//acrescido de mais um numeor "0". O usuario digitando "4" como valor de linhas, será impresso 4 linhas de zero.
// 0    
// 00
// 000 
// 0000

//Exercicio3
//const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

//a. Imprima cada um dos valores do array original.
// for (let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

//b. Imprima cada um dos valores do array original divididos por 10
// for (let i = 0; i < array.length; i++){
//     console.log(array[i]/10);
// }

//c. Crie um novo array contendo, somente, os números pares do array original. Imprima esse novo array
// let novoArray = [];
// for (let i = 0; i < array.length; i++){
//     if(array[i]%2 === 0){
//         novoArray.push(array[i]); 
//     }
// }
// console.log(novoArray)

//d. Crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Imprima este novo array
// let novoArray = [];
// for (let i = 0; i < array.length; i++){
//    novoArray.push(`O elemento do index ${i} é o ${array[i]}`)
// } 
// console.log(novoArray)

//e. Escreva um programa que imprima no console o maior e o menor números contidos no array original
// let maior = 0;
// let menor = 131;
// for (let i = 0; i < array.length; i++){
//     if(maior < array[i]){
//     maior = array[i]
//     }
//     if(menor > array[i]){
//         menor = array[i]
//     }
// } 
// console.log(`O maior valor é ${maior} e o menor é ${menor}`)

//Desafio2
// const player1 = Number(prompt("Digite o valor a ser adivinhado: "))
// console.log("Vamos jogar!!")
// let controle = true;
// let tentativas = 1;
// let player2

// while(controle){
//  player2 = Number(prompt(`Digite o valor da tentativa numero ${tentativas}:`));
//  console.log("Valor chutado foi: ", player2);
//   if(player2 > player1){
//     console.log("Errrrrrrrou, é menor")
//   }else if(player2 < player1){
//     console.log("Errrrrouu, é maior")
//     }else{ 
//       console.log("Acertou!!")
//       console.log(`Numero de tentativas ${tentativas}`)
//       controle = false;
//     }
//     tentativas++;
// }

//Desafio3
//let maximo = Math.floor(100);
//let minimo = Math.ceil(1);
let maximo = 100;
let minimo = 1;

const player1 = Math.floor(Math.random() * (maximo - minimo))+ minimo;
console.log(player1);

console.log("Vamos jogar!!")
let controle = true;
let tentativas = 1;
let player2;

// while(controle){
//  player2 = Number(prompt(`Digite o valor da tentativa numero ${tentativas}:`));
//  console.log("Valor chutado foi: ", player2);
//   if(player2 > player1){
//     console.log("Errrrrrrrou, é menor")
//   }else if(player2 < player1){
//     console.log("Errrrrouu, é maior")
//     }else{ 
//       console.log("Acertou!!")
//       console.log(`Numero de tentativas ${tentativas}`)
//       controle = false;
//     }
//     tentativas++;
// }

while(controle){
    player2 = Number(prompt(`Digite o valor da tentativa numero ${tentativas}:`));
    console.log("Valor chutado foi: ", player2);
    
    if(player2 > player1){
        for(let i = 0; i < 1; i++){
            if(player2 <= player1 + 10){
                console.log("Vc esta quente, mas ainda sou menor");
            }else if(player2 > player1 + 10 && player2 <= player1 + 20){
                console.log("Vc esta morno, mas ainda sou menor");
            }else{
                console.log("Sou menor e vc esta lonnge");
            }
        }
    }else if(player2 < player1){
        for(let i = 0; i < 1; i++){
            if(player2 >= player1 - 10){
                console.log("Vc esta quente, mas ainda sou maior");
            }else if(player2 < player1 - 10 && player2 >= player1 - 20){
                console.log("Vc esta morno, mas ainda sou maior");
            }else{
                console.log("Sou maior e vc esta lonnge");
            }
        }
    }else if(player2 === player1){
        console.log("Acertou!!")
        console.log(`Numero de tentativas ${tentativas}`)
        controle = false;
    }

    tentativas++;
}

//Não foi tranquilo fazer as alterações. Daria para refinar mais ainda as dicas de proximidade mas conforme 
//eu fosse acrescentando "if/else if" mais complexo seria e o codigo ficaria muito confuso/caotico.
//Usar funçõesfora do codigo principal assim como a função Math.random() o codigo ficaria mais limpo.
 




