import React from 'react';
import './App.css';

import Post from './components/Post/Post';
import iconeAdd from './img/add.svg';
import { SecaoNovaPostagem } from './components/SecaoNovaPostagem/SecaoNovaPostagem';

class App extends React.Component {
  //Estado dos posts
  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },

      {
        nomeUsuario: 'bruno',
        fotoUsuario: 'https://picsum.photos/50/50?radom=1',
        fotoPost: 'https://picsum.photos/200/150?radom=2'
      },

      {
        nomeUsuario: 'rafael',
        fotoUsuario: 'https://picsum.photos/id/1062/50/50',
        fotoPost: 'https://picsum.photos/id/1041/200/150'
      }
    ],

    novoPost: false
  }

  //----------------------------------------------------------------------------
  //Funcionalidade de Novo Post
  onClickNovaPostagem = () => {
    this.setState({
      novoPost: !this.state.novoPost
    })
  }
  //----------------------------------------------------------------------------
  //Funcionalidade de Comentario
  aoCriarPost = () => {
    this.setState({
      novoPost: false
    })
  }

  render() {

    let componenteNovoPost

    if (this.state.novoPost) {
      componenteNovoPost = <SecaoNovaPostagem />
    }

    const componentePosts = this.state.posts.map((post) => {
      return (

        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      )
    })

    return (
      <div className={'app-container'} >
        <div className={'add-post'}>
          <p>Criar novo Post</p>
          <img alt={'Icone-Novo'} src={iconeAdd} onClick={this.onClickNovaPostagem} />
        </div>
        { componentePosts}
      </div>
    );
  }
}

export default App;
