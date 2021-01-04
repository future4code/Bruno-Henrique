import React, { Component } from 'react'
import './SecaoNovaPostagem.css'

export class SecaoNovaPostagem extends Component {
    state = {
        dicaUsuario: "Nome de usuario",
        dicaAvatar: "Imagem do avatar",
        dicaImagem: "Imagem do post",

        novoUsuario: `${this.props.nomeUsuario}`,
        novoAvatar:`${this.props.fotoAvatar}`,
        novaFoto: `${this.props.fotoPost}`
    }

    onChangeNovoPost = (event) => {
        this.setState({ novoUsuario: event.target.value, novoAvatar: event.target.value, novaFoto: event.target.value, })
    }

    render() {
        return <div className={'add-container'}>
            <input
                type={'text'}
                placeholder={this.state.dicaUsuario}
                value={this.state.nomeUsuario}
                onChange={this.onChangeNovoPost}
            />

            <input
                type={'text'}
                placeholder={this.state.dicaAvatar}
                value={this.state.fotoAvatar}
                onChange={this.onChangeNovoPost}
            />

            <input
                type={'text'}
                placeholder={this.state.dicaImagem}
                value={this.state.fotoPost}
                onChange={this.onChangeNovoPost}
            />

            <button>Criar</button>
        </div>


    }
}