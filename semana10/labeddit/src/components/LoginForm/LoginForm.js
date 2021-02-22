import React from 'react'
import styled from "styled-components";
import Grid from '@material-ui/core/Grid'
import Paper from "@material-ui/core/Paper";
import { Avatar, Button, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const StyledPaper = styled(Paper)`
    background-color: #48489212;
    padding: 20px;
    /* height: 60vh; */
    width: 300px;
    margin: 0 auto;
`

const StyledAvatarIcon = styled(Avatar)`
    background-color: #484892;
`

const StyledInput = styled(TextField)`
    margin: 10px 0;
`

const ButtonLogin = styled(Button)`
    margin-top: 20px;
`

const LoginForm = () => {
    return (
        <Grid>
            <StyledPaper elevation={10}>
                <Grid align="center">
                    <StyledAvatarIcon>
                        <LockOutlinedIcon />
                    </StyledAvatarIcon>
                    <h2>Login</h2>
                </Grid>
                <form>
                    <StyledInput
                        variant="outlined"
                        fullWidth
                        label="Usuário"
                        placeholder="Digite E-mail"
                        required
                    />
                    <StyledInput
                        type="password"
                        variant="outlined"
                        fullWidth
                        label="Senha"
                        placeholder="Digite senha"
                        required
                    />
                    <ButtonLogin
                        type="submit"
                        variant="contained"
                        fullWidth
                        color="primary"
                    >
                        Logar
                </ButtonLogin>
                </form>
            </StyledPaper>
        </Grid>
    )
}

export default LoginForm;
