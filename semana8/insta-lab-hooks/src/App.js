import React, {useState} from 'react';
import Post from './components/Post/Post';
import styled from "styled-components"
import SecaoNovaPostagem from './components/SecaoNovaPostagem/SecaoNovaPostagem';

const AppContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const App = () => {

  return (
    <AppContainer>
      <SecaoNovaPostagem />
    </AppContainer>
  );
}


export default App;
