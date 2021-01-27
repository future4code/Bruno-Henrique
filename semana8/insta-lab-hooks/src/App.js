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
  const [post, setPost] = useState({})

  useEffect(() => { 
    const list = [post, ...postsList]
    setPostsList(list)
  }, [post])

  const handlePost = (name, avatar, photo) => {
    setPost({ user: name, avatar: avatar, link: photo })
    // setPostsList([...postsList, { user: name, avatar: avatar, link: photo }])
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
