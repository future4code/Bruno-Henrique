//a) Como você faria, já com a extensão instalada, para gerar um arquivo javascript a partir do 
//arquivo typescript com o código abaixo?
//Usaria o comando tsc para gerar um arquivo .js
type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}
const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}
const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}
const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

//b) E se este arquivo estivesse dentro de uma pasta chamada src.O processo seria diferente? 
//Se sim, descreva as diferenças.
//Caso o tsconfig.json não tenha sido criado e editado para apontar os caminhos de input("rootDir": "./src") 
//e output("outDir": "./build")eh necessario informar o caminho do arquivo(./src/exemplo.ts)

//c) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, 
//explique como fazer. 
//Após a criação e edição do arquivo tsconfig.json como na letra b, podemos usar apenas o script build: tsc 
//(npm run build) dentro do package.json para transpilar todos os arquivos .ts dentro da pasta ./src

//d) Compare esse arquivo com o que criamos durante a aula (ele está disponível na área de configuração 
//do projeto ali em cima). Leia as descrições sobre cada uma das propriedades. Alguma configuração 
//que chamou sua atenção? O que mudou em comparação com o arquivo criado pelos slides?
//Em "basic options": 
//opção "jsx": "preserve". Por fazer inferencia ao React;
//Em "Additional Checks":
//"noUnusedLocals": true e noUnusedParameters": true. Por um codigo mais limpo 