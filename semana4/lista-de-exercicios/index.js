// //Metodo 1
// function comparaValor(numero){
// 	if(numero > 10){
// 		console.log(`(Metodo1)Numero informado é maior que 10`)
// 	}else if(numero < 10){
// 		console.log(`(Metodo1)Numero informado é menor que 10`)
// 	}else{
// 		console.log(`(Metodo1)Numero informado é igual a 10`)
// 	}
// }

// const valor = Number(prompt("Digite o valor a ser comparado"));
// comparaValor(valor);

// //Metodo 2
// const comparaValor2 = () => {
// 	const valor2 = Number(prompt("Digite o valor a ser comparado"));
// 	if(valor2 > 10){
// 		console.log(`(Metodo2)Numero informado é maior que 10`)
// 	}else if(valor2 < 10){
// 		console.log(`(Metodo2)Numero informado é menor que 10`)
// 	}else{
// 		console.log(`(Metodo2)Numero informado é igual a 10`)
// 	}
// }
// comparaValor2();

// //Metodo 3
// const comparaValor3 = (valor3, imprimi) => {
//     if (valor3 > 10) {
//         imprimi(`(Metodo3)Numero informado é maior que 10`)
//     } else if (valor3 < 10) {
//         imprimi(`(Metodo3)Numero informado é menor que 10`)
//     } else {
//         imprimi(`(Metodo3)Numero informado é igual a 10`)
//     }
// }

// const imprimiConsole = (mensagem) => { 
//     console.log(mensagem);
// }

// const numero = Number(prompt("Digite o valor a ser comparado"));
// comparaValor3(numero,imprimiConsole)

//Metodo 4
const comparaValor4 = (valor4, imprimi) => {
    if (valor4 > 10) {
        imprimi(`(Metodo4)Numero informado é maior que 10`)
    } else if (valor4 < 10) {
        imprimi(`(Metodo4)Numero informado é menor que 10`)
    } else {
        imprimi(`(Metodo4)Numero informado é igual a 10`)
    }
}

const numero = Number(prompt("Digite o valor a ser comparado"));
comparaValor4(numero, (mensagem) => { 
    console.log(mensagem);
});
