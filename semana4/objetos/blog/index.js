//Exercicio Aula14
/* 1 - Extraia o blog.zip para dentro da pasta blog, garanta que 
o arquivo JS está linkado com o arquivo HTML.
2 - Capture os valores dos campos do HTML e crie um objeto para 
armazenar as informações do seu post, possuindo as mesmas propriedades 
que serão preenchidas no formulário.
3 - Ao preencher o formulário, adicione o objeto criado no passo acima 
a um array de objetos e limpe os campos do formulário.
Para testar, faça com que o array seja impresso no console.
4 - Na mesma página, crie uma seção no HTML que será responsável por mostrar
os posts. Pode ser uma div ou uma section, por exemplo.
5 - Crie uma função responsável por inserir os posts no HTML. Não se preocupe
com a aparência, garanta que os dados estão sendo exibidos. */

const postArray = [];

function addPost() {
    const title = document.getElementById("titulo-post");
    const author = document.getElementById("autor-post");
    const textAreaPost = document.getElementById("conteudo-post");
    const conteudoPostagem = document.getElementById("postagens");

    if (title.value && author.value && textAreaPost.value) {
        let post = {
            titulo: title.value,
            autor: author.value,
            texto: textAreaPost.value
        }
        postArray.push(post)
        // console.log(postArray)        
        // console.log(post)

        // //Alerta de criação de post
        alert("Post criado!")

        //Apagando inputs
        title.value = ""
        author.value = ""
        textAreaPost.value = ""

        //conteudoPostagem.innerHTML += `<article class="post-style">${post}</article>`
        console.log(conteudoPostagem)
    } else {
        alert("Dados invalidos!")
    }

}






