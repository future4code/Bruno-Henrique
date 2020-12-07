//Exercicio1
//a. Será impresso o valor 10 (2*5) e depois o valor 50 (10*5)
//
//b. Não seria impresso nada no console pois a função so retorna o calculo

//Exercicio2
//a. Após a chamar a função não nomeada passando o array com nomes como parametro, os nomes Darvas e Caio
//serão impressos no console. Onde Darvas eh a primeira posição do array(index = 0 ) e Caio a segunda 
//posição do array (index = 1);
//
//b. Serão impressos os nomes Amanda e em seguida Caio.

//Exercico3
//Essa função retorna um array numerico com valores (pares)^2. Talvez um nome "valorParAoQuadrado".

//Exercicio4
//a.
// function informacaoGenerica(){
//     console.log("Meu nome é Bruno, tenho 37 anos, moro em Minas Gerais e já saltei de paraquedas.");
// }
// informacaoGenerica();

//b.
// function informacaoGenerica2(nome, idade, endereco, esportesRadicais){
//     let afirmacao;
//     if (esportesRadicais){
//         afirmacao = "já";
//     }else{
//         afirmacao = "nunca";
//     }
//     let fraseGenerica = `Meu nome é ${nome}, tenho ${idade} anos, moro em ${endereco} e ${afirmacao} saltei de paraquedas.`;   
//     return fraseGenerica
// }
// console.log(informacaoGenerica2("Rafael", 35, "Curitiba", false));

//Exercicio5
//a.  
//const soma2Numeros = (numero1, numero2) => {
//     return numero1 + numero2;
// }
// console.log(soma2Numeros(23 , 5));

//b.
// function maiorOuMenor(numero1, numero2){
//     if(numero1 >= numero2){
//         return true;
//     }
//     return false;
// }
// console.log(maiorOuMenor(20, 15));

//c. 
// function imprimi10Vezes(frase){
//     for(let i = 10; i >= 1; i--){
//         console.log(frase);
//     }
// }
// imprimi10Vezes("Clonando ovelhas paraquedistas!");

//Exercicio6
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

//a.
// const tamanhoDoArray = (array) => {
//     return array.length;
// }
// console.log(tamanhoDoArray(array));

//b.
// const parOuImpar = (numero) => {
//     if(numero%2 === 0){
//         return true;
//     }
//     return false;
// }
// console.log(parOuImpar(45))

//c. 
// function quantidadeDeNumerosPares(array){
//     let quantidade = 0;
//     for(let i = 0; i < array.length; i++){
//         if(array[i] % 2 === 0){
//             console.log(array[i]);
//             quantidade++;
//         }
//     }
//     return quantidade;
// }
// console.log("Tem ", quantidadeDeNumerosPares(array), "numeros pares nesse array")

//d.
// const parOuImpar = (numero) => {
//     return numero%2 === 0;
// }
// console.log(parOuImpar(45))

// function quantidadeDeNumerosPares(array){
//     let quantidade = 0;
//     for(let i = 0; i < array.length; i++){
//         if(parOuImpar(array[i])){
//             quantidade++;
//         }
//     }
//     return quantidade;
// }
// console.log("Tem ", quantidadeDeNumerosPares(array), "numeros pares nesse array")


