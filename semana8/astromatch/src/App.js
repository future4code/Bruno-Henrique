import React, { useState } from 'react'
import axios from 'axios'

import { baseURL } from "./API/Api";
import { StyledBtn, ContainerApp, ContainerFooter, ContainerHeader, ContainerMain } from './style/StyleApp';

function App() {
  const [astroProfile, setAstroProfile] = useState({})

  const getProfile = () => {
    axios.get(`${baseURL}/person`)
      .then((response) => {
        setAstroProfile(response.data.profile)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <ContainerApp>
      <StyledBtn>Reset</StyledBtn>
      <ContainerHeader>
        <StyledBtn>Deu match</StyledBtn>
        AstroMatch
        <StyledBtn>Não deu</StyledBtn>
      </ContainerHeader>
      <ContainerMain>Perfil</ContainerMain>
      <ContainerFooter>
        <StyledBtn>Sim</StyledBtn>
        <StyledBtn>Não</StyledBtn>
      </ContainerFooter>
    </ContainerApp>
  );
}

export default App;
