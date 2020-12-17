import React from 'react'
import './Post.css'

import { IconeComContador } from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeFavoritoVazio from '../../img/bookmark-vazio.svg'
import iconeFavoritoSalvo from '../../img/bookmark-salvo.svg'
import iconeShare from '../../img/share.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import { SecaoCompartilhar } from '../SecaoCompartilhar/SecaoCompartilhar'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,

    favorito: false,
    compartilhar: false
  }

  //----------------------------------------------------------------------------
  //Funcionalidade de Marcar
  onClickFavoritar = () => {
    this.setState({
      favorito: !this.state.favorito
    })
  }

  //----------------------------------------------------------------------------
  //Funcionalidade de Marcar
  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido
    })

    if (this.state.curtido) {
      this.setState({ numeroCurtidas: this.state.numeroCurtidas - 1 });
      //console.log('Descurtiu!')      
    } else {
      this.setState({ numeroCurtidas: this.state.numeroCurtidas + 1 });
      //console.log('Curtiu!')
    }
  }

  //----------------------------------------------------------------------------
  //Funcionalidade de Comentario
  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }
  
  //----------------------------------------------------------------------------
  //Funcionalidade de Compartilhar
  onClickCompartilhar = () => {
    this.setState({
      compartilhar: !this.state.compartilhar
    })
  }

  //----------------------------------------------------------------------------
  //Funcionalidade de enviar Comentario
  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
  //----------------------------------------------------------------------------
  //Funcionalidade de icones marcar, compartilhar, curtir, comentar, adicionar  novo post
    let iconeFavorito

    if (this.state.favorito) {
      iconeFavorito = iconeFavoritoSalvo
    } else {
      iconeFavorito = iconeFavoritoVazio
    }

    let iconeCurtida

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteCompartilhar

    if (this.state.compartilhar) {
      componenteCompartilhar = <SecaoCompartilhar />
    }

    let componenteComentario

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{this.props.nomeUsuario}</p>
        <img className={'favoritar'} src={iconeFavorito} onClick={this.onClickFavoritar} />
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'} />

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        {/* Funcionalidade para compartilhar */}
        <div>
        <img alt={'Icone'} src={iconeShare} onClick={this.onClickCompartilhar}/>
        </div>

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
      {componenteCompartilhar}
    </div>
  }
}

export default Post