import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import GlobalStateContext from '../../global/GlobalStateContext'

import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import styled from 'styled-components'
import { goToLoginPage } from '../../Routes/Coordinator';

const HeaderContainer = styled(Toolbar)`
    display:flex;
    justify-content:space-between;
    background-color: #413c69;
`;

const StyledButton = styled(Button)`
    background-color: #413c69;
    font-weight: 500;
    font-size: 12px;
    border-radius: 10%;
    color: #f4f9f9;

    :hover{
        background-color: #211a5d;
    }
`;

export const Header = () => {
    const history = useHistory()
    const { states, setters } = useContext(GlobalStateContext)
    
    const logout = () => {
        setters.setToken("")
    }

    const handleBtnLoginAction = () => {
        if (states.token) {
            logout()
            setters.setHandleBtnLoginText("Login")
            goToLoginPage(history)
        } else {
            goToLoginPage(history)
        }
    }

    const labedditLogo = (
        <Typography variant='h4'>
            LabEddit
        </Typography>
    )
    const sign = (
        <StyledButton onClick={handleBtnLoginAction}>
            {states.handleBtnLoginText}
        </StyledButton>
    )

    const displayDesktop = () => {
        return (
            <HeaderContainer>
                {labedditLogo}
                {sign}
            </HeaderContainer>
        );
    }

    return (
        <header>
            <AppBar position='static' elevation={0}>{displayDesktop()}</AppBar>
        </header>
    )
}
