import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import styled from 'styled-components'

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

    const labedditLogo = (
        <Typography variant='h4'>
            LabEddit
        </Typography>
    )
    const signIn = (
        <StyledButton>
            Login
        </StyledButton>
    )

    const displayDesktop = () => {
        return (
            <HeaderContainer>
                {labedditLogo}
                {signIn}
            </HeaderContainer>);
    }

    return (
        <header>
            <AppBar position='static' elevation={false}>{displayDesktop()}</AppBar>
        </header>
    )
}
