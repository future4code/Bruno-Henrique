//a) Copie o código acima para um arquivo .ts. Depois, crie um type para representar um post 
//e utilize-o para fazer a tipagem do array posts.
type post = {
    autor: string,
    texto: string
}
const user1: post = {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
}
const user2: post = {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
}
const user3: post = {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
}
const user4: post = {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
}
const user5: post = {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
}

const listaDePosts: post[] = [user1, user2, user3, user4, user5]

console.log(listaDePosts)

//b .Quais são as entradas e saídas dessa função? Copie a função para o mesmo arquivo .ts 
//do array de posts e faça a tipagem necessária.
//Entradas são uma lista com todos os posts e um autor para pesquisa. Saida é um array filtrado
//de acordo com a busca

