import React from 'react';
import useForm from '../../hooks/useForm'

import axios from 'axios'
import { baseURL } from '../constants/baseURL'

import { Header } from '../header/Header'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { StyledPaperSignUp, StyledAvatarIcon, StyledInput, StyledButton } from './style'

export default function SignUp() {
    const [input, handleInput, clearForm] = useForm({ username: "", email: "", password: "" })

    const handleBtn = (e) => {
        e.preventDefault();
        axios.post(`${baseURL}/signup`, input)
            .then((res) => {
                localStorage.getItem('token', res.data.token)
                alert(`Cadastro realizado com sucesso!`)
                clearForm()
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <Grid align="center">
            <Header />
            <Grid item xs={12} sm={8} md={4}>
                <StyledPaperSignUp elevation={8} square>
                    <Grid align="center">
                        <StyledAvatarIcon>
                            <LockOutlinedIcon />
                        </StyledAvatarIcon>
                        <h2>Cadastro</h2>
                    </Grid>
                    <form onSubmit={handleBtn}>
                        <StyledInput
                            name="username"
                            value={input.username}
                            onChange={handleInput}

                            inputProps={{ pattern: "^.{3,10}" }}
                            helperText="Mínimo de 3 e Máximo de 10 caracteres"
                            type="text"
                            variant="outlined"
                            fullWidth
                            label="Usuário"
                            required
                        />
                        <StyledInput
                            name="email"
                            value={input.email}
                            onChange={handleInput}

                            type="email"
                            variant="outlined"
                            fullWidth
                            label="Email"
                            required
                        />
                        <StyledInput
                            name="password"
                            value={input.password}
                            onChange={handleInput}

                            inputProps={{ pattern: "^.{6,15}" }}
                            helperText="Mínimo de 6 e Máximo de 15 caracteres"
                            type="password"
                            variant="outlined"
                            fullWidth
                            label="Senha"
                            required
                        />
                        <StyledButton
                            type="submit"
                            variant="contained"
                            fullWidth
                            color="primary"
                        >
                            Cadastre-se
                    </StyledButton>
                    </form>
                </StyledPaperSignUp>
            </Grid>
        </Grid>
    )
}