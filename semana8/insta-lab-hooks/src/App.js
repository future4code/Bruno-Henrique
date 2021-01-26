import React, { useState } from 'react';
import Post from './components/Post/Post';
import styled from "styled-components"
import SecaoNovaPostagem from './components/SecaoNovaPostagem/SecaoNovaPostagem';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const App = () => {

  const [postsList, setPostsList] = useState([])
  const [post, setPost] = useState({})

  const [inputUserName, setInputUserName] = useState('')
  const [inputUserAvatar, setInputUserAvatar] = useState('')
  const [inputLink, setInputLink] = useState('')

  const handleInputUserName = (e) => {
    setInputUserName(e.target.value)
  }

  const handleInputUserAvatar = (e) => {
    setInputUserAvatar(e.target.value)
  }

  const handleInputLink = (e) => {
    setInputLink(e.target.value)
  }

  const handlePostsList = () => {
    setPost({
      user: inputUserName,
      avatar: inputUserAvatar,
      link: inputLink
    })
    const newPostsList = postsList
    newPostsList.push(post)
    setPostsList(newPostsList)
  }

  return (
    <AppContainer>
      <SecaoNovaPostagem
        inputUserName={inputUserName} onChangeName={handleInputUserName}
        inputUserAvatar={inputUserAvatar} onChangeAvatar={handleInputUserAvatar}
        inputLink={inputLink} onChangeLink={handleInputLink}
        onClickCreate={handlePostsList}
      />

      {postsList.map((post) => {
        return (
          <Post
            key={post.link}
            nomeUsuario={post.user}
            fotoUsuario={post.avatar}
            fotoPost={post.link}
          />
        )
      })}

      {/* <Post
        nomeUsuario={'Usuário'}
        fotoUsuario={'https://picsum.photos/50/50'}
        fotoPost={'https://picsum.photos/200/150'}
      /> */}
    </AppContainer>
  );
}


export default App;
