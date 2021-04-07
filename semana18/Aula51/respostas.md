# Aula 51 - Criptografia e User Roles

### Exercicio 1
~~~javascript
import * as bcrypt from "bcryptjs";

const rounds = Number(process.env.BCRYPT_COST);
const salt = await bcrypt.genSalt(rounds);
const result = await bcrypt.hash(s, salt);
console.log("encrypted message: ", result);
~~~

**a.** O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?
- Round representa o grau de dificuldade que a critografia irá possuir. 
- Salt representa a criação da hash baseado no numero de rounds.

Quanto maior o valor atribuido ao rounds mais segura é a encriptação. Devemos levar em consideração o processamento da maquina que esta gerando essa hash pois quanto maior o valor de rounds mais do processador é exigido.

Usei o rounds = 12 e 15; Porque muito acima(30) disso o tempo de resposta do meu note para encriptar a string foi superior ao tempo que tenho de conexão com o servidor do banco de dados(timeout).

### Exercicio 2
**a. Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.**
O de cadastro. Porque na minha tabela não havia nenhum usuario com a senha encripitada e não adiantaria editar o login pois não haveria como verificar a senha dos usuarios cadastrados anteriormente.

**d. No exercício de ontem, nós criamos o endpoint user/profile. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.**
Não. Porque usamos o token para acessar o profile.


### Exercicio 3


### Exercicio 4


### Exercicio 5


### Exercicio 6

