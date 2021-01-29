import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { baseURL } from './API/Api';

import { AppContainer, HeaderConatiner, MainContainer, FooterContainer } from './StyledApp'
import MainScreen from './pages/MainScreen';
import UserProfile from './pages/UserProfile';


function App() {
  const [currentScreen, setCurrentScreen] = useState(true)

  const handleScreen = () => {
    setCurrentScreen(!currentScreen)
  }

  const getCurrentScreen = () => {
    switch (currentScreen) {
      case true:
        return <MainScreen />
      case false:
        return <UserProfile />
      default:
        return <MainScreen />
    }
  }

  const handleReset = () => {
    axios.put(`${baseURL}/clear`)
      .then((response) => { 
        alert(`${response.data.message}`)
      })
      .catch((error) => { 
        console.log(error)
      })
  }

  return (
    <AppContainer>
      <HeaderConatiner>
        <button onClick={handleScreen}>Mudar pagina</button>
        <button onClick={handleReset}>Reset</button>
        Header
      </HeaderConatiner>
      <MainContainer>
        {getCurrentScreen()}
      </MainContainer>
      <FooterContainer>footer</FooterContainer>
    </AppContainer>
  )
}

export default App;
