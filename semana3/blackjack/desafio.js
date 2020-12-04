/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!");

if (confirm("Iniciar rodada?")) {
   console.log("Inicio do jogo");
   let computador = [];
   let jogador = [];
   let somaJ;
   let somaC;
   let regra1 = true; //Regra onde verifica a igualdade das cartas(A's)

   while (regra1) {
      somaJ = 0;
      somaC = 0;

      // Distribuindo as cartas
      for (let i = 0; i < 2; i++) {         
         //console.log(`Carta ${i + 1} do Jogador`);
         let cartasJogador = comprarCarta();
         jogador[i] = cartasJogador.texto;
         somaJ += cartasJogador.valor;

         //console.log(`Carta ${i + 1} do Computador`);
         let cartasComputador = comprarCarta();
         computador[i] = cartasComputador.texto;
         somaC += cartasComputador.valor;
      }

      if(jogador[0].split("", 1 ) === "A" && jogador[0] === jogador[1]){
         console.log("Entrei no if do jogador regra1")
      }else if(computador[0].split("", 1 ) === "A" && computador[0] === computador[1]){
         console.log("Entrei no if do computador regra1")
      }else{
         regra1 = false;
      }
   }
   console.log(`Jogador - cartas: ${jogador[0]} ${jogador[1]} pontuação: ${somaJ}`);
   console.log(`Computador - cartas: ${computador[0]} ${computador[1]} pontuação: ${somaC}`);

   if(confirm(`Suas cartas são ${jogador}. A carta revelado do computador é ${computador[0]}`+ "\n" + "Deseja comprar mais uma carta?")){
      //console.log("Estou dentro do confirm de compra de cartas");


   }else{
      console.log("Sai do confirm de compra de cartas");
   }


   //Verificação de vencedor
   let verificarVencedor = true;
   while (verificarVencedor) {
      if (somaJ > somaC && somaJ <= 21) {
         console.log("Jogador venceu");
         verificarVencedor = false;
      } else if (somaC > somaJ && somaC <= 21) {
         console.log("Computador venceu");
         verificarVencedor = false;
      } else if (somaJ === somaC && somaJ <= 21) {
         console.log("Deu empate")
         verificarVencedor = false;
      } else {
         verificarVencedor = false;
      }
   }

} else {
   console.log("O jogo acabou");
}

