//Exercício 1
//a) Crie uma variável minhaString do tipo string e atribua um valor a ela.
//Tente atribuir um número a esta variável. O que acontece?
//Acusa um erro de declaração na variavel -- Type 'number' is not assignable to type 'string'. --
let minhaString: string = "Teste de declaração"

//b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como podemos 
//fazer para que essa variável também aceite strings?
//Podemos adicionar o carctere "|" (Union type) para dizer que a variavel pode assumir mais de
//um tipo de valor
let meuNumero: number | string = 34
meuNumero = "34"

//c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades nome do tipo string,
//idade do tipo numero e corFavorita do tipo string.Crie mais três objetos, que também precisam ter apenas os campos 
//definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

//d) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris.
//Utilize um enum para isso.
enum CORES_ARCO_IRIS {
    VIOLETA = "violeta",
    ANIL = "anil",
    AZUL = "azul",
    VERDE = "verde",
    AMARELO = "amarelo",
    LARANJA = "laranja",
    VERMELHO = "vermelho"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES_ARCO_IRIS
}

const Bruno: pessoa = {
    nome: "Bruno Silva",
    idade: 37,
    corFavorita: CORES_ARCO_IRIS.AMARELO
}

const Rafael: pessoa = {
    nome: "Rafael Silva",
    idade: 36,
    corFavorita: CORES_ARCO_IRIS.AZUL
}

const Jennifer: pessoa = {
    nome: "Jennifer Smith",
    idade: 31,
    corFavorita: CORES_ARCO_IRIS.VERDE
}

console.log("Sucesso!")





