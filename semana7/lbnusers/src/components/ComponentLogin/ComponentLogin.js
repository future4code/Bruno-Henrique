import React from 'react'
import axios from 'axios'

class ComponentLogin extends React.Component{
    state={
        inputNome:"",
        inputEmail:""
    }

    adicionaNome = (event) =>{
        this.setState({inputNome: event.target.value})
    }
    
    adicionaEmail = (event) => {
        this.setState({inputEmail: event.target.value})
    }

    criaCadastro = () => {
        const body = {
            "name" : this.state.inputNome,
            "email" : this.state.inputEmail
        };
        
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers:{
                Authorization: "bruno-silva-epps"
            }
        }).then((resposta) => {
            alert("Cadastro efetuado com sucesso!")
            this.setState({inputNome: "" , inputEmail: ""})
        }).catch((erro) => {
            alert("Não foi possivel efetuar o cadastro")
            console.log(erro.message)
        })
    }
    
    render(){
        return(
            <div>
                <h2>Login</h2>
                <div>
                    <label>Nome:</label>
                    <input 
                        value={this.state.inputNome}
                        onChange={this.adicionaNome}
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input 
                        value={this.state.inputEmail}
                        onChange={this.adicionaEmail}
                    />
                </div>

                <button onClick={this.criaCadastro}>Criar usuario</button>
            </div>
        )
    }
}

export default ComponentLogin;