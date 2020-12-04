/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10) 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!");

if (confirm("Iniciar rodada?")) {
   console.log("Inicio do jogo");
   let computador = [];
   let jogador = [];
   let somaJ = 0;
   let somaC = 0;

   for (let i = 1; i <= 2; i++) {
      // console.log(`dando cartas ${i}`)
      console.log(`Carta ${i} do Jogador`);
      let cartasJogador = comprarCarta();
      jogador.push(cartasJogador.texto);
      somaJ += cartasJogador.valor;

      console.log(`Carta ${i} do Computador`);
      let cartasComputador = comprarCarta();
      computador.push(cartasComputador.texto);
      somaC += cartasComputador.valor;
   }
   console.log(`Jogador - cartas: ${jogador[0]} ${jogador[1]} pontuação: ${somaJ}`);
   console.log(`Computador - cartas: ${computador[0]} ${computador[1]} pontuação: ${somaC}`);

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