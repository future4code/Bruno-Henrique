import React, { useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'

import { useHistory } from 'react-router-dom'
import { goToSignUpPage, goToFeedPage } from '../../Routes/Coordinator'
import axios from 'axios'
import { baseURL } from '../constants/baseURL'

import useForm from '../../hooks/useForm'

import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { StyledPaperLogin, StyledAvatarIcon, StyledInput, StyledButton } from './style'

const LoginForm = () => {
    const { states, setters } = useContext(GlobalStateContext)
    const history = useHistory()
    const [input, handleInput, clearForm] = useForm({ email: "", password: "" })

    const handleBtn = (e) => {
        e.preventDefault();
        axios.post(`${baseURL}/login`, input)
            .then((res) => {
                setters.setToken(res.data.token)
                clearForm()
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <Grid>
            <StyledPaperLogin elevation={8} square>
                <Grid align="center">
                    <StyledAvatarIcon>
                        <LockOutlinedIcon />
                    </StyledAvatarIcon>
                    <h2>Login</h2>
                </Grid>
                <form onSubmit={handleBtn}>
                    <StyledInput
                        name="email"
                        value={input.email}
                        onChange={handleInput}

                        variant="outlined"
                        fullWidth
                        label="Usuário"
                        placeholder="Digite E-mail"
                        required
                    />
                    <StyledInput
                        name="password"
                        value={input.password}
                        onChange={handleInput}

                        type="password"
                        variant="outlined"
                        fullWidth
                        label="Senha"
                        placeholder="Digite senha"
                        required
                    />
                    <StyledButton
                        type="submit"
                        variant="contained"
                        fullWidth
                        color="primary"
                    >
                        Logar
                    </StyledButton>
                </form>
                <StyledButton
                    onClick={() => goToSignUpPage(history)}
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Cadastre-se
                </StyledButton>
            </StyledPaperLogin>
        </Grid>
    )
}

export default LoginForm;
