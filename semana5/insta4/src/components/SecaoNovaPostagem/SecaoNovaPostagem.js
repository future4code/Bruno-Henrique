import React, { Component } from 'react'

export class SecaoNovaPostagem extends React.Component {
    state = {
        dicaUsuario: "Nome de usuario",
        dicaAvatar: "Imagem do avatar",
        dicaImagem: "Imagem do post",

        valorInputUsuario: "",
        valorInputFotoAvatar: "",
        valorInputFotoPost: ""
    }

    onChangeNovoPost = (event) => {
        this.setState({ textocomentario: event.target.value })
        //console.log(event.target.value)
    }

    render() {
        return <div>
            <input
                placeholder={this.state.dicaUsuario}
                value={this.state.valorInputUsuario}
                onChange={this.onChangeNovoPost}
            />

            <input
                placeholder={this.state.dicaAvatar}
                value={this.state.valorInputFotoAvatar}
                onChange={this.onChangeNovoPost}
            />

            <input
                placeholder={this.state.dicaImagem}
                value={this.state.valorInputFotoPost}
                onChange={this.onChangeNovoPost}
            />

            <button onClick={this.props.aoEnviar}>Enviar</button>
        </div>


    }
}