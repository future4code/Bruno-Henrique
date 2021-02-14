import React from 'react'
import styled from "styled-components";
import axios from 'axios'

import { baseURL } from '../api/baseURL'
import { useForm } from '../hooks/useForm'

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
    margin-top: 30px;
`

const intialValuesField = {
    email: "",
    password: ""
}

const LoginForm = (props) => {

    const {formLogin} = useForm(intialValuesField)

    const handleBtnLogin = (event) => {
        event.preventDefault()

        axios.post(`${baseURL}/login`, formLogin)
            .then((res) => {
                window.localStorage.setItem("admToken", res.data.token)
                props.history.push("/trips/create")
            })
            .catch((error) => {
                alert("Usuario ou senha incorretos!")
                console.log(error)
            })
    }

    return (
        <form onSubmit={handleBtnLogin}>
            <Grid>
                <StyledPaper elevation={10}>
                    <Grid align="center">
                        <StyledAvatarIcon>
                            <LockOutlinedIcon />
                        </StyledAvatarIcon>
                        <h2>Login</h2>
                    </Grid>

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

                </StyledPaper>
            </Grid>
        </form>
    )
}

export default LoginForm;
