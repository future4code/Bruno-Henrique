//Exercico1
/* O programa recebe um numero digitado pelo usuario, o converte para o tipo Number e dentro
 da condicional "if/else" o numero é testado. Se o numero for par (resto da divisão por 2 = 0(zero)) a 
 mensagem "Passou no teste" será impressa no console e caso seja diferente de 0(zero) a mensagem
 "Não passou no teste" será impressa no console. Teste de par ou impar. 
*/

//Exercicio2
/*a.Ele compara a igualdade entre o valor atribuido pelo usuario e as opções de seleção dentro 
da condicional "switch" e executa os comandos dentro do "case".

b. A mesagem será "O preço da fruta Maçã é, R$ 2.25"

c. Acredito que as mensagens "O preço da fruta Pera é, R$ 5.5" e "O preço da fruta Pera é, R$ 5.
*/

//Exercicio3
/*a. Está pedindo um valor para o usuário e convertendo de string para Number.

b. Para o valor 10, a mensagem será "Esse numero passou no teste" pois ele atende a condição do "if".
Caso o numero seja -10, não haverá nenhuma mensagem no terminal como no exemplo anterior.

c. Sim. Haverá um mesagem falando que a variavel "mensagem" não foi declarada. Isto ocorre porque
a variavel que o "console.log" busca foi declarada dentro do bloco if e esta variavel não foi compartilhada
com o bloco Pai que eh onde o "console.log(mensagem) está".
*/

/* //Exercicio4
const idade = Number(prompt("Digite a sua idade:"));

if(idade >= 18){
    console.log("Você pode dirigir");
}else{
    console.log("Você não pode dirigir");
} */

/* //Exercicio5
const turno = prompt("Digite o turno em que estuda: M(Matutino) ou V(vespertino) ou N(Noturno)").toUpperCase();

if(turno === "M"){
    console.log("Bom dia!");
}else if (turno === "V"){
    console.log("Boa tarde!");
}else if(turno === "N"){
    console.log("Boa noite!");
}else{
    console.log("Turno não encontrado");
} */

/* //Exercicio6
const turno = prompt("Digite o turno em que estuda: M(Matutino) ou V(vespertino) ou N(Noturno)").toUpperCase();

switch (turno) {
    case "M":
        console.log("Bom dia!");
        break;

    case "V":
        console.log("Boa tarde!");
        break;

    case "N":
        console.log("Boa noite!");
        break;

    default:
        console.log("Turno não encontrado!");
        break;           
} */

/* //Exercicio7
const generoFilme = prompt("Informe o gênero do filme escolhido:").toLowerCase();
const valorIngresso = Number(prompt("Informe o valor do ingresso:"));

if (generoFilme === "fantasia" && valorIngresso < 15){
    console.log("Bom filme!");
}else if (generoFilme !== "fantasia" || valorIngresso >= 15){
    console.log("Escolha outro filme:(");
} */

/* //Desafio1
const generoFilme = prompt("Informe o gênero do filme escolhido:").toLowerCase();
const valorIngresso = Number(prompt("Informe o valor do ingresso:"));

if (generoFilme === "fantasia" && valorIngresso < 15){
    let snack = prompt("Qual snack que você quer comprar?");
    console.log("Bom filme!");
    console.log(`Com ${snack} eh bem melhor:)`)
}else if (generoFilme !== "fantasia" || valorIngresso >= 15){
    console.log("Escolha outro filme:(");
} */

//Desafio2
const cliente = prompt("Informe seu nome completo");
const tipoDeJogo = prompt("Qual tipo de jogo deseja ver? Digite IN (para internacional) ou DO (para doméstico)").toUpperCase();
const etapaJogo = prompt("O jogo se encontra em qual etapa? Digite SF (para semi-final) ou DT (para disputa de terceiro lugar) ou FI (para a final)").toUpperCase();
const categoria = Number(prompt("Informe acategoria dos ingressos: 1 para camarote OU 2 para setor verde ou 3 para setor vermelho OU 4 para setor rosa"));
const quantidadeIngressos = Number(prompt("Digite quantos ingressos deseja:"));

switch(tipoDeJogo){
    case "DO":
        switch(etapaJogo){
            case "DT":
                const valorIngressoDT = [660 , 440 , 330 , 170];
                let valorTotalDT;

                if(categoria === 1){

                    valorTotalDT = quantidadeIngressos*valorIngressoDT[categoria-1];
                    console.log(`Nome do cliente:  ${cliente}`);
                    console.log(`Tipo de Jogo:  ${tipoDeJogo}`);
                    console.log(`Etapa do Jogo:  ${etapaJogo}`);
                    console.log(`Categoria:  ${categoria}`);
                    console.log(`Quantidade de ingressos:  ${quantidadeIngressos}`);

                    console.log(`Valor do ingresso:  ${valorIngressoDT[categoria-1]}`);
                    console.log(`Valor Total:  ${valorTotalDT}`);

                }else if(categoria === 2){

                    valorTotalDT = quantidadeIngressos*valorIngressoDT[categoria-1];
                    console.log(`Nome do cliente:  ${cliente}`);
                    console.log(`Tipo de Jogo:  ${tipoDeJogo}`);
                    console.log(`Etapa do Jogo:  ${etapaJogo}`);
                    console.log(`Categoria:  ${categoria}`);
                    console.log(`Quantidade de ingressos:  ${quantidadeIngressos}`);

                    console.log(`Valor do ingresso:  ${valorIngressoDT[categoria-1]}`);
                    console.log(`Valor Total:  ${valorTotalDT}`);

                } else if(categoria === 3){
                
                    valorTotalDT = quantidadeIngressos*valorIngressoDT[categoria-1];
                    console.log(`Nome do cliente:  ${cliente}`);
                    console.log(`Tipo de Jogo:  ${tipoDeJogo}`);
                    console.log(`Etapa do Jogo:  ${etapaJogo}`);
                    console.log(`Categoria:  ${categoria}`);
                    console.log(`Quantidade de ingressos:  ${quantidadeIngressos}`);

                    console.log(`Valor do ingresso:  ${valorIngressoDT[categoria-1]}`);
                    console.log(`Valor Total:  ${valorTotalDT}`);

                }else if(categoria === 4){

                    valorTotalDT = quantidadeIngressos*valorIngressoDT[categoria-1];
                    console.log(`Nome do cliente:  ${cliente}`);
                    console.log(`Tipo de Jogo:  ${tipoDeJogo}`);
                    console.log(`Etapa do Jogo:  ${etapaJogo}`);
                    console.log(`Categoria:  ${categoria}`);
                    console.log(`Quantidade de ingressos:  ${quantidadeIngressos}`);

                    console.log(`Valor do ingresso:  ${valorIngressoDT[categoria-1]}`);
                    console.log(`Valor Total:  ${valorTotalDT}`);

                }else{
                    console.log(`Categoria ${categoria} inválida!`)
                }       
            break;

            case "SF":
                const valorIngressoSF = [1320 , 880 , 550 , 220];
                let valorTotalSF;

                if(categoria === 1){

                    valorTotalSF = quantidadeIngressos*valorIngressoSF[categoria-1];
                    console.log(`Nome do cliente:  ${cliente}`);
                    console.log(`Tipo de Jogo:  ${tipoDeJogo}`);
                    console.log(`Etapa do Jogo:  ${etapaJogo}`);
                    console.log(`Categoria:  ${categoria}`);
                    console.log(`Quantidade de ingressos:  ${quantidadeIngressos}`);

                    console.log(`Valor do ingresso:  ${valorIngressoSF[categoria-1]}`);
                    console.log(`Valor Total:  ${valorTotalSF}`);

                }else if(categoria === 2){

                    valorTotalSF = quantidadeIngressos*valorIngressoSF[categoria-1];
                    console.log(`Nome do cliente:  ${cliente}`);
                    console.log(`Tipo de Jogo:  ${tipoDeJogo}`);
                    console.log(`Etapa do Jogo:  ${etapaJogo}`);
                    console.log(`Categoria:  ${categoria}`);
                    console.log(`Quantidade de ingressos:  ${quantidadeIngressos}`);

                    console.log(`Valor do ingresso:  ${valorIngressoSF[categoria-1]}`);
                    console.log(`Valor Total:  ${valorTotalSF}`);

                } else if(categoria === 3){
                
                    valorTotalSF = quantidadeIngressos*valorIngressoSF[categoria-1];
                    console.log(`Nome do cliente:  ${cliente}`);
                    console.log(`Tipo de Jogo:  ${tipoDeJogo}`);
                    console.log(`Etapa do Jogo:  ${etapaJogo}`);
                    console.log(`Categoria:  ${categoria}`);
                    console.log(`Quantidade de ingressos:  ${quantidadeIngressos}`);

                    console.log(`Valor do ingresso:  ${valorIngressoSF[categoria-1]}`);
                    console.log(`Valor Total:  ${valorTotalSF}`);

                }else if(categoria === 4){

                    valorTotalSF = quantidadeIngressos*valorIngressoSF[categoria-1];
                    console.log(`Nome do cliente:  ${cliente}`);
                    console.log(`Tipo de Jogo:  ${tipoDeJogo}`);
                    console.log(`Etapa do Jogo:  ${etapaJogo}`);
                    console.log(`Categoria:  ${categoria}`);
                    console.log(`Quantidade de ingressos:  ${quantidadeIngressos}`);

                    console.log(`Valor do ingresso:  ${valorIngressoSF[categoria-1]}`);
                    console.log(`Valor Total:  ${valorTotalSF}`);

                }else{
                    console.log(`Categoria ${categoria} inválida!`)
                }       
            break;
            
            case "FI":
                const valorIngressoFI = [1980 , 1320 , 880 , 330];
                let valorTotalFI;

                if(categoria === 1){

                    valorTotalFI = quantidadeIngressos*valorIngressoFI[categoria-1];
                    console.log(`Nome do cliente:  ${cliente}`);
                    console.log(`Tipo de Jogo:  ${tipoDeJogo}`);
                    console.log(`Etapa do Jogo:  ${etapaJogo}`);
                    console.log(`Categoria:  ${categoria}`);
                    console.log(`Quantidade de ingressos:  ${quantidadeIngressos}`);

                    console.log(`Valor do ingresso:  ${valorIngressoFI[categoria-1]}`);
                    console.log(`Valor Total:  ${valorTotalFI}`);

                }else if(categoria === 2){

                    valorTotalFI = quantidadeIngressos*valorIngressoFI[categoria-1];
                    console.log(`Nome do cliente:  ${cliente}`);
                    console.log(`Tipo de Jogo:  ${tipoDeJogo}`);
                    console.log(`Etapa do Jogo:  ${etapaJogo}`);
                    console.log(`Categoria:  ${categoria}`);
                    console.log(`Quantidade de ingressos:  ${quantidadeIngressos}`);

                    console.log(`Valor do ingresso:  ${valorIngressoFI[categoria-1]}`);
                    console.log(`Valor Total:  ${valorTotalFI}`);

                } else if(categoria === 3){
                
                    valorTotalFI = quantidadeIngressos*valorIngressoFI[categoria-1];
                    console.log(`Nome do cliente:  ${cliente}`);
                    console.log(`Tipo de Jogo:  ${tipoDeJogo}`);
                    console.log(`Etapa do Jogo:  ${etapaJogo}`);
                    console.log(`Categoria:  ${categoria}`);
                    console.log(`Quantidade de ingressos:  ${quantidadeIngressos}`);

                    console.log(`Valor do ingresso:  ${valorIngressoFI[categoria-1]}`);
                    console.log(`Valor Total:  ${valorTotalFI}`);

                }else if(categoria === 4){

                    valorTotalFI = quantidadeIngressos*valorIngressoFI[categoria-1];
                    console.log(`Nome do cliente:  ${cliente}`);
                    console.log(`Tipo de Jogo:  ${tipoDeJogo}`);
                    console.log(`Etapa do Jogo:  ${etapaJogo}`);
                    console.log(`Categoria:  ${categoria}`);
                    console.log(`Quantidade de ingressos:  ${quantidadeIngressos}`);

                    console.log(`Valor do ingresso:  ${valorIngressoFI[categoria-1]}`);
                    console.log(`Valor Total:  ${valorTotalFI}`);

                }else{
                    console.log(`Categoria ${categoria} inválida!`)
                }       
            break;
        }
    break;
    
    case "IN":
        switch(etapaJogo){
            case "DT":
                const valorIngressoDT = [660 , 440 , 330 , 170];
                let valorTotalDT;

                if(categoria === 1){

                    valorTotalDT = quantidadeIngressos*valorIngressoDT[categoria-1]*4.1;
                    console.log(`Nome do cliente:  ${cliente}`);
                    console.log(`Tipo de Jogo:  ${tipoDeJogo}`);
                    console.log(`Etapa do Jogo:  ${etapaJogo}`);
                    console.log(`Categoria:  ${categoria}`);
                    console.log(`Quantidade de ingressos:  ${quantidadeIngressos}`);

                    console.log(`Valor do ingresso:  ${valorIngressoDT[categoria-1]*4.1}`);
                    console.log(`Valor Total:  ${valorTotalDT}`);

                }else if(categoria === 2){

                    valorTotalDT = quantidadeIngressos*valorIngressoDT[categoria-1]*4.1;
                    console.log(`Nome do cliente:  ${cliente}`);
                    console.log(`Tipo de Jogo:  ${tipoDeJogo}`);
                    console.log(`Etapa do Jogo:  ${etapaJogo}`);
                    console.log(`Categoria:  ${categoria}`);
                    console.log(`Quantidade de ingressos:  ${quantidadeIngressos}`);

                    console.log(`Valor do ingresso:  ${valorIngressoDT[categoria-1]*4.1}`);
                    console.log(`Valor Total:  ${valorTotalDT}`);

                } else if(categoria === 3){
                
                    valorTotalDT = quantidadeIngressos*valorIngressoDT[categoria-1]*4.1;
                    console.log(`Nome do cliente:  ${cliente}`);
                    console.log(`Tipo de Jogo:  ${tipoDeJogo}`);
                    console.log(`Etapa do Jogo:  ${etapaJogo}`);
                    console.log(`Categoria:  ${categoria}`);
                    console.log(`Quantidade de ingressos:  ${quantidadeIngressos}`);

                    console.log(`Valor do ingresso:  ${valorIngressoDT[categoria-1]*4.1}`);
                    console.log(`Valor Total:  ${valorTotalDT}`);

                }else if(categoria === 4){

                    valorTotalDT = quantidadeIngressos*valorIngressoDT[categoria-1]*4.1;
                    console.log(`Nome do cliente:  ${cliente}`);
                    console.log(`Tipo de Jogo:  ${tipoDeJogo}`);
                    console.log(`Etapa do Jogo:  ${etapaJogo}`);
                    console.log(`Categoria:  ${categoria}`);
                    console.log(`Quantidade de ingressos:  ${quantidadeIngressos}`);

                    console.log(`Valor do ingresso:  ${valorIngressoDT[categoria-1]*4.1}`);
                    console.log(`Valor Total:  ${valorTotalDT}`);

                }else{
                    console.log(`Categoria ${categoria} inválida!`)
                }       
            break;

            case "SF":
                const valorIngressoSF = [1320 , 880 , 550 , 220];
                let valorTotalSF;

                if(categoria === 1){

                    valorTotalSF = quantidadeIngressos*valorIngressoSF[categoria-1]*4.1;
                    console.log(`Nome do cliente:  ${cliente}`);
                    console.log(`Tipo de Jogo:  ${tipoDeJogo}`);
                    console.log(`Etapa do Jogo:  ${etapaJogo}`);
                    console.log(`Categoria:  ${categoria}`);
                    console.log(`Quantidade de ingressos:  ${quantidadeIngressos}`);

                    console.log(`Valor do ingresso:  ${valorIngressoSF[categoria-1]*4.1}`);
                    console.log(`Valor Total:  ${valorTotalSF}`);

                }else if(categoria === 2){

                    valorTotalSF = quantidadeIngressos*valorIngressoSF[categoria-1]*4.1;
                    console.log(`Nome do cliente:  ${cliente}`);
                    console.log(`Tipo de Jogo:  ${tipoDeJogo}`);
                    console.log(`Etapa do Jogo:  ${etapaJogo}`);
                    console.log(`Categoria:  ${categoria}`);
                    console.log(`Quantidade de ingressos:  ${quantidadeIngressos}`);

                    console.log(`Valor do ingresso:  ${valorIngressoSF[categoria-1]*4.1}`);
                    console.log(`Valor Total:  ${valorTotalSF}`);

                } else if(categoria === 3){
                
                    valorTotalSF = quantidadeIngressos*valorIngressoSF[categoria-1]*4.1;
                    console.log(`Nome do cliente:  ${cliente}`);
                    console.log(`Tipo de Jogo:  ${tipoDeJogo}`);
                    console.log(`Etapa do Jogo:  ${etapaJogo}`);
                    console.log(`Categoria:  ${categoria}`);
                    console.log(`Quantidade de ingressos:  ${quantidadeIngressos}`);

                    console.log(`Valor do ingresso:  ${valorIngressoSF[categoria-1]*4.1}`);
                    console.log(`Valor Total:  ${valorTotalSF}`);

                }else if(categoria === 4){

                    valorTotalSF = quantidadeIngressos*valorIngressoSF[categoria-1]*4.1;
                    console.log(`Nome do cliente:  ${cliente}`);
                    console.log(`Tipo de Jogo:  ${tipoDeJogo}`);
                    console.log(`Etapa do Jogo:  ${etapaJogo}`);
                    console.log(`Categoria:  ${categoria}`);
                    console.log(`Quantidade de ingressos:  ${quantidadeIngressos}`);

                    console.log(`Valor do ingresso:  ${valorIngressoSF[categoria-1]*4.1}`);
                    console.log(`Valor Total:  ${valorTotalSF}`);

                }else{
                    console.log(`Categoria ${categoria} inválida!`)
                }       
            break;
            
            case "FI":
                const valorIngressoFI = [1980 , 1320 , 880 , 330];
                let valorTotalFI;

                if(categoria === 1){

                    valorTotalFI = quantidadeIngressos*valorIngressoFI[categoria-1]*4.1;
                    console.log(`Nome do cliente:  ${cliente}`);
                    console.log(`Tipo de Jogo:  ${tipoDeJogo}`);
                    console.log(`Etapa do Jogo:  ${etapaJogo}`);
                    console.log(`Categoria:  ${categoria}`);
                    console.log(`Quantidade de ingressos:  ${quantidadeIngressos}`);

                    console.log(`Valor do ingresso:  ${valorIngressoFI[categoria-1]*4.1}`);
                    console.log(`Valor Total:  ${valorTotalFI}`);

                }else if(categoria === 2){

                    valorTotalFI = quantidadeIngressos*valorIngressoFI[categoria-1]*4.1;
                    console.log(`Nome do cliente:  ${cliente}`);
                    console.log(`Tipo de Jogo:  ${tipoDeJogo}`);
                    console.log(`Etapa do Jogo:  ${etapaJogo}`);
                    console.log(`Categoria:  ${categoria}`);
                    console.log(`Quantidade de ingressos:  ${quantidadeIngressos}`);

                    console.log(`Valor do ingresso:  ${valorIngressoFI[categoria-1]*4.1}`);
                    console.log(`Valor Total:  ${valorTotalFI}`);

                } else if(categoria === 3){
                
                    valorTotalFI = quantidadeIngressos*valorIngressoFI[categoria-1]*4.1;
                    console.log(`Nome do cliente:  ${cliente}`);
                    console.log(`Tipo de Jogo:  ${tipoDeJogo}`);
                    console.log(`Etapa do Jogo:  ${etapaJogo}`);
                    console.log(`Categoria:  ${categoria}`);
                    console.log(`Quantidade de ingressos:  ${quantidadeIngressos}`);

                    console.log(`Valor do ingresso:  ${valorIngressoFI[categoria-1]*4.1}`);
                    console.log(`Valor Total:  ${valorTotalFI}`);

                }else if(categoria === 4){

                    valorTotalFI = quantidadeIngressos*valorIngressoFI[categoria-1]*4.1;
                    console.log(`Nome do cliente:  ${cliente}`);
                    console.log(`Tipo de Jogo:  ${tipoDeJogo}`);
                    console.log(`Etapa do Jogo:  ${etapaJogo}`);
                    console.log(`Categoria:  ${categoria}`);
                    console.log(`Quantidade de ingressos:  ${quantidadeIngressos}`);

                    console.log(`Valor do ingresso:  ${valorIngressoFI[categoria-1]*4.1}`);
                    console.log(`Valor Total:  ${valorTotalFI}`);

                }else{
                    console.log(`Categoria ${categoria} inválida!`)
                }       
            break;
        }
    break; 

}
