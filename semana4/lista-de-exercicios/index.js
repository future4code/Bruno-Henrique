/********************** Exercícios de interpretação de código ***********************/
//Exercico 1
/* Após a função ser chamada com o valor de 100, essa função será executada. Primeiro ela irá pedir que o usuario
digite a cotação atual da moeda dolar. Ela retornará o valor multiplicado pela cotação informada que ficará armazenada
na variavel meuDinheiro. O console.log vai imprimir no console o valor da variavel meuDinheiro.  */

//Exercico 2
/* A função investeDinheiro, recebe dois parametros de entrada que deve ser informados no momento da chamada
da função. Após a chamada passando os dois valores de parametros(tipoDeInvestimento e valor) para ela, a função 
delara uma variavel que irá receber após as verificações condicionais(swich/case) o rendimento do valor aplicado
de acordo com o tipoDeInvestimento informado na chamada. O retorno da função será a variavel declarada no iníco.
Serão impressos no console, o valor de 165 referente a variavel novoMontante e undefined referente a variavel
segundoValor pois o tipoDeInvestimento foi informado errado, então a função exibe um alerta e como não há valor
dentro da variavel de retorno, no console se´r exibido undefined. */

//Exercicio 3
/* Declarado os tres arrays(numeros,array1 e array2), o loop for/of e usado no array numeros onde numero irá
receber os itens de cada posição do array e verificado se esse valor eh par ou impar e SE ele é par ele
será colocado dentro do array1 SENAO é par ele será colodado no array2. Em ambos os casos é usado o a 
o push para colocar o valor na ultima posição do array. A primeira mensagem no console será o tamanho do array
numeros, a segunda mensagem será o tamanho do array1 e a terceira linha no console será o tamanho do array2
pois foi usado o .length nos arrays*/

//Exercico4
/* Será impresso no console o menor e o maior numero do numeros respectivamente. Após declarado o array e as
variaveis numero1 e numero2, o array entra no loop do for/of onde será compara o valor de cada item do array
com as variaveis numero1 e numero2. SE o item na primeira posição do array eh menor que numero1, numero1 recebe
o desse item, ou seja armazenando sempre o menor durante a interação. O inverso acontece com a variavel numero2
onde somente os itens do array que forem maiores que a variavel numero2 serão colocados na propria variavel
numero2. */


/*********************** Exercícios de Lógica de Programação ***********************/
//Exercicio 1
/* Podemos usar o loop FOR para fazer as interações para percorrer o array/lista, o forEach, o forOf
entre outras.*/

/* const arrayNumeros = [10, 12, 20, 30, 50];
const arrayExemplo = [];
//Exemplo usando o FOR "puro"
// for(let i = 0; i < arrayNumeros.length; i++){
//     if(arrayNumeros[i] < 40){
//         arrayExemplo.push(arrayNumeros[i]);
//     } 
// }
// //Exemplo usando o FOR/OF
// for(let item of arrayNumeros){
//     if(arrayNumeros[i] > 15){
//         arrayExemplo.push(arrayNumeros[i]);
//     } 
// }
*/

//Exercicio 2
//a. false
//b. true
//c. true
//d. true
//e. true

//Exercicio 3
/* Este codigo do jeito que está não executa o pedido pois o valor dda variavel i nunca muda com isso 
entrariamos em um loop while infinito. */

// const quantidadeDeNumerosPares = 4;
// let i = 1;
// while(i <= quantidadeDeNumerosPares) {
//   //console.log(i*2)
//   i++;
// }

/* Alterado o codigo desconsiderando o numero 0 (zero) como par */

//Exercicio 4
// function verificaTriangulo(ladoA, ladoB, ladoC){
//     if(ladoA === ladoB && ladoA === ladoC){
//         alert("Esse triangulo é equilatero")
//     }else if(ladoA === ladoB || ladoA === ladoC || ladoB ===ladoC){
//         alert("Esse triangulo é isoceles")
//     }else{
//         alert("Esse triangulo é escaleno")

//     }
// }
// verificaTriangulo(3,3,3);
// verificaTriangulo(3,3,4);
// verificaTriangulo(3,4,6);

//Exercicio 5
// function verifica2Numeros(numero1, numero2, divisivel, diferenca) {
//     let maior;
//     if (numero1 > numero2) {
//         maior = numero1
//     } else {
//         maior = numero2
//     }
//     // console.log(`O maior é: ${maior}`)

//     // Verificação de divisibilidade
//     divisivel(numero1, numero2);
    
//     // Verificação de diferença
//     diferenca(numero1, numero2);
    
// }
// const divisibilidade = (num1, num2) => {
//     if (num1 % num2 === 0) {
//         // console.log(`O numero ${num1} é divisivel por ${num2}`)
//         // console.log(`O numero ${num2} não é divisivel por ${num1}`)
//         return true       
//     } else if (num2 % num1 === 0) {
//         // console.log(`O numero ${num2} é divisivel por ${num1}`)
//         // console.log(`O numero ${num1} não é divisivel por ${num2}`)
//         return true
//     }
//     return false
// }

// const diferencaEntre = (num1, num2) => {
//     let dif = Math.abs(num1 - num2)
//     // console.log(`A diferença entre os dois numeros é ${dif}`);
//     return dif
// }

// const inputAleatorio = verifica2Numeros(15, 30, divisibilidade, diferencaEntre);


/*********************** Exercícios de Funções ***********************/
//Exercicio 1
// const arrNumeros = [5,9,30,23,27,12];
// segundoMaiorEMenor(arrNumeros);

// function segundoMaiorEMenor(array){
//     let menorNumero = Infinity;
//     let segundoMenorNumero = Infinity;

//     let maiorNumero = 0;
//     let segundoMaiorNumero = 0;

//     for(let i = 0; i < array.length; i++){
//         if(array[i] < menorNumero){
//             menorNumero = array[i];
//         }

//         if(array[i] > maiorNumero){
//             maiorNumero = array[i];
//         }        
//     }

//     for (let num of array){
//         if(num < segundoMenorNumero && num > menorNumero){
//             segundoMenorNumero = num;
//         }

//         if(num > segundoMaiorNumero && num < maiorNumero){
//             segundoMaiorNumero = num;
//         }
//     }

//     // console.log(`O menor numero do array é ${menorNumero} e o segundo menor é ${segundoMenorNumero}`);
//     // console.log(`O maior numero do array é ${maiorNumero} e o segundo maior é ${segundoMaiorNumero}`);
// }

//Exercico 2
// const mensagemAlert = () =>{
//     alert("Hello Labenu")
// }
//  mensagemAlert()








