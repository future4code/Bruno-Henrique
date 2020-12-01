/* //Exercicio1 
const bool1 = true;
const bool2 = false;
const bool3 = !bool2;
let resultado = bool1 && bool2; //false
console.log("a. ", resultado)
resultado = bool1 && bool2 && bool3; //false
console.log("b. ", resultado)
resultado = !resultado && (bool1 || bool1); //true
console.log("c. ", resultado)
console.log(typeof resultado); // boolean */

/* //Exercicio2
let array;
console.log("a. ", array); //undefined
array = null;
console.log("b. ", array); //null
array = [3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13];
console.log("c. ", array.length); //11
let i = 0;
console.log("d. ", array[i]); //3
array[i+1] = 19;
console.log("e. ", array); //[3, 19, 5, 6, 7, 8, 9, 10 ,11, 12, 13]
const valor = array[i+6];
console.log("f. ", valor); //9 */

/* //Exercicio3
let idade = prompt("Qual a sua idade?");
let idadeAmigo = prompt("Qual a idade do seu melhor amigo ou amiga?");

const diferencaIdades = Number(idade) > Number(idadeAmigo);
console.log("Sua idade é maior do que a do seu melhor amigo ou amiga?", diferencaIdades);
alert(`Sua idade é maior do que a do seu melhor amigo? ${diferencaIdades}`);

console.log("A diferença entre idades é: ", Number(idade) - Number(idadeAmigo));
alert(`A diferença entre idades é: , ${Number(idade) - Number(idadeAmigo)}`); */


/* //Exercicio4
const numero = prompt("Digite um numero par:");
console.log("O resto da divisão é: ", Number(numero)%2 ); //O resto de uma divisão de um numero par por 2 sempre será zero
                                                          //Caso o numero informado seja impar o resto será 1
alert(`O resto da divisão eh: ${Number(numero)%2}`);
 

/*  //Exercicio5
 let listaDeTarefas = [];

 let tarefa1 = prompt("Digite sua primeira tarefa do dia:");
 let tarefa2 = prompt("Digite sua segunda tarefa do dia:");
 let tarefa3 = prompt("Digite sua terceira tarefa do dia:");

 listaDeTarefas.push(tarefa1);
 listaDeTarefas.push(tarefa2);
 listaDeTarefas.push(tarefa3);

 console.log(listaDeTarefas);
 alert(`O array eh: ${listaDeTarefas}`);

 let tarefaConcluida = prompt("Informe o indice(0 ,1 ou 2) da tarefa que foi realizada?");
 listaDeTarefas.splice(tarefaConcluida , 1);
 console.log(listaDeTarefas);
 alert(`O novo array eh: ${listaDeTarefas}`); */

/*  //Exercicio6
 const nome = prompt("Digite o seu nome:");
 const email = prompt("Digite o seu email:");

 console.log("O e-mail" , email , "foi cadastrado com sucesso. Seja bem-vinda(o)," , nome , "!");
 alert(`O e-mail , ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`); */


//Desafio1
//(KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
//(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32

//let celsius;
//let kelvin;
//let fahrenheit;

/* //a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
fahrenheit = 77;
kelvin = (fahrenheit -32)*5/9 + 273.15;
console.log(`${fahrenheit}F é o mesmo que ${kelvin}K`);
alert(`${fahrenheit}F é o mesmo que ${kelvin}K`);
*/

/* //b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.
celsius = 80;
fahrenheit = (celsius)*9/5 + 32;
console.log(`${celsius}C é o mesmo que ${fahrenheit}F`);
alert(`${celsius}C é o mesmo que ${fahrenheit}F`);
 */

/* //c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.
celsius = 30;
fahrenheit = fahrenheit = (celsius)*9/5 + 32;
kelvin = (fahrenheit -32)*5/9 + 273.15;

console.log(`${celsius}C é o mesmo que ${fahrenheit}F ou ${kelvin}K`);
alert(`${celsius}C é o mesmo que ${fahrenheit}F ou ${kelvin}K`);
 */

 //d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.
/* celsius = prompt("Informe o valor da temperatura em Graus Celsius:");
fahrenheit = fahrenheit = (celsius)*9/5 + 32;
kelvin = (fahrenheit -32)*5/9 + 273.15;

console.log(`${celsius}C é o mesmo que ${fahrenheit}F ou ${kelvin}K`);
alert(`${celsius}C é o mesmo que ${fahrenheit}F ou ${kelvin}K`); 
*/

/* //Desafio2
const quilowattHora = 0.05;
let consumo;
let desconto;

//a. Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora;
consumo = 280*quilowattHora;
desconto = consumo - (consumo*0.15);
console.log(`O valor a ser pago pela residencia será de R$ ${consumo}`);

//b. Altere o programa para receber mais um valor: a porcentagem de desconto. 
//   Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto.
console.log(`O valor a ser pago pela residencia com desconto de 15% será de R$ ${desconto}`);
 */

 //Desafio3
 let kilograma;
 let libra;
 let oz;
 let metro;
 let milha;
 let pes;
 let gal;
 let litro;

 //a. Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que 
 //   converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 20lb equivalem a X kg
 libra = 20;
 kilograma = libra/2.2046;
 console.log(`${libra}lb equivalem a ${kilograma}Kg`);

//b. Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que
//   converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 10.5oz equivalem a X kg
oz = 10.5;
kilograma = (oz/0.035274)/1000;
console.log(`${oz}oz equivalem a ${kilograma}Kg`);




