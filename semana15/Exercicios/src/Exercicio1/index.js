//a.)
//Como fazemos para acessar os parâmetros passados na linha de comando para o Node?
//Acessamos atraves da propriedade process.argv apartir do indice[2].

//b.)
//Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima 
//no console uma mensagem que siga a seguinte estrutura: "Olá, (Nome)! Você tem (sua idade) anos."
const user = process.argv[2]
const age = Number(process.argv[3])
console.log(`b.) Olá, ${user}! Você tem ${age} anos.`)

//c.)
//Altere o programa acima para que mostre também a sua idade daqui a sete anos.
console.log(`c.) Olá, ${user}! Você tem ${age} anos.Em sete anos você terá ${age + 7} anos`)
