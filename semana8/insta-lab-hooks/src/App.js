import React, { useEffect, useState } from 'react';

import Post from './components/Post/Post';
import SecaoNovaPostagem from './components/SecaoNovaPostagem/SecaoNovaPostagem';
import styled from "styled-components"

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function App() {

  const [postsList, setPostsList] = useState([])

  const handlePost = (name, avatar, photo) => {    
    setPostsList([{ user: name, avatar: avatar, link: photo }, ...postsList])
  }

  const renderPosts = postsList.map((post) => {
    return (
      <Post
        key={post.link}
        nomeUsuario={post.user}
        fotoUsuario={post.avatar}
        fotoPost={post.link}
      />
    )
  })

  return (
    <AppContainer>
      <SecaoNovaPostagem
        onClickCreate={handlePost}
      />
      {renderPosts}
    </AppContainer>
  );
}

export default App;
