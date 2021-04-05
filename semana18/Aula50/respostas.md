# Aula 50 - Introdução a Autenticação

### Exercicio 1
Na autenticação de usuários o elemento mais fundamental talvez seja o id. É muito importante encontrar um que seja fácil de guardar e que garanta unicidade. Para isso usaremos a versão v4 do UUID, uma das mais recomendadas para isso.

**a.** Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
**Resp.:** Concordo com a utilização de strings ao invés de somente números pois utilizando strings podemos gerar combinações únicas de id. 

**b.** A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.
