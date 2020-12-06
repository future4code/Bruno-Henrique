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
   let listaCartasJogador = [];
   let listaCartasComputador = [];
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
         listaCartasJogador = comprarCarta();
         jogador[i] = listaCartasJogador.texto;
         somaJ += listaCartasJogador.valor;

         //console.log(`Carta ${i + 1} do Computador`);
         listaCartasComputador = comprarCarta();
         computador[i] = listaCartasComputador.texto;
         somaC += listaCartasComputador.valor;
      }

      if (jogador[0].split("", 1) === "A" && jogador[0].split("", 1) === jogador[1].split("", 1)) {
         console.log("Entrei no if do jogador regra1")
      } else if (computador[0].split("", 1) === "A" && computador[0].split("", 1) === computador[1].split("", 1)) {
         console.log("Entrei no if do computador regra1")
      } else {
         regra1 = false;
      }
   }
   console.log(`Jogador - cartas: ${jogador[0]} ${jogador[1]} - pontuação: ${somaJ}`);
   console.log(`Computador - cartas: ${computador[0]} ${computador[1]} - pontuação: ${somaC}`);

   let mensagem = (`Suas cartas são ${jogador}. A carta revelado do computador é ${computador[0]}` + "\n" + "Deseja comprar mais uma carta?")
   let regraGeral = true;

   while (somaJ < 21 && regraGeral) {
      if (somaJ < 17) {
         alert("A soma de suas cartas devem ser maior que 17!!");
         listaCartasJogador = comprarCarta();
         jogador.push(listaCartasJogador.texto);
         somaJ += listaCartasJogador.valor;
         console.log(`Vc comprou ${jogador[jogador.length - 1]} - Sua Pontuação é ${somaJ}`);
         alert(`Vc comprou ${jogador[jogador.length - 1]} - Sua Pontuação é ${somaJ}`);
      } else if (somaJ >= 17) {
         if (confirm(mensagem)) {
            listaCartasJogador = comprarCarta();
            jogador.push(listaCartasJogador.texto);
            somaJ += listaCartasJogador.valor;
            console.log(`Vc comprou ${jogador[jogador.length - 1]} - Sua Pontuação é ${somaJ}`);
            alert(`Vc comprou ${jogador[jogador.length - 1]} - Sua Pontuação é ${somaJ}`);
         } regraGeral = false;
      }
   }

   // console.log(regraGeral)
   regraGeral = true;
   if (somaJ <= 21) {
      while (somaC < 21 && regraGeral) {
         if (somaC < 21) {
            listaCartasComputador = comprarCarta();
            computador.push(listaCartasComputador.texto);
            somaC += listaCartasComputador.valor;
            console.log(`Computador comprou ${computador[computador.length - 1]} - Pontuação é ${somaC}`);
         }
      }
   }

   console.log(`Suas cartas são ${jogador}. Sua pontuação foi de ${somaJ}`);

   //Verificação de vencedor
   if (somaJ <= 21 && somaC !== 21) {
      console.log("Jogador venceu");
   } else if (somaJ === 21 && somaC === 21) {
      console.log("Deu empate");
   } else{
      console.log("Computador ganhou");
   }

} else {
   console.log("O jogo acabou");
}

