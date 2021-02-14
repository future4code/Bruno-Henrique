import React from 'react'
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';

import { MainContainer, StyledForm, StyledLogin, StyledSection } from './stylepages/StyledHomePage'

const HomePage = () => {
    const history = useHistory();

    const handleBtnForm = () => {
        history.push("/aplication-form")
    }

    const handleBtnLogin = () => {
        history.push("/login")
    }

    return (
        <MainContainer>
            <Header />
            <StyledSection>
                <StyledLogin>
                    <button onClick={handleBtnLogin}>Login</button>
                </StyledLogin>
                <StyledForm>
                    <button onClick={handleBtnForm}>Formulario</button>
                </StyledForm>
            </StyledSection>

        </MainContainer>
    )
};

export default HomePage;