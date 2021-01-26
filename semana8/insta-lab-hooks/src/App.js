import React, { useState, useEffect } from 'react';
import Post from './components/Post/Post';
import styled from "styled-components"
import SecaoNovaPostagem from './components/SecaoNovaPostagem/SecaoNovaPostagem';

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
    const newPostsList = postsList
    newPostsList.push(post)
    setPostsList(newPostsList)
  },[post])

  const handlePost = (name, avatar, link) => {
    setPost({
      user: name,
      avatar: avatar,
      link: link
    })
  }

  const allPosts = postsList.map((post) => {
    return (
      <Post
        key={post.link}
        nomeUsuario={post.user}
        fotoUsuario={post.avatar}
        fotoPost={post.link}
      />
    )
  })

  // console.log(post)
  // console.log(postsList)

  return (
    <AppContainer>
      <SecaoNovaPostagem
        onClickCreate={handlePost}
      />
      {allPosts}
    </AppContainer>
  );
}

export default App;
