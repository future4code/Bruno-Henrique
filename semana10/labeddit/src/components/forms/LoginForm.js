import React from 'react'

import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { StyledPaperLogin, StyledAvatarIcon, StyledInput, StyledButton } from './style'

const LoginForm = () => {
    return (
        <Grid>
            <StyledPaperLogin elevation={8} square>
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
                    <StyledButton
                        type="submit"
                        variant="contained"
                        fullWidth
                        color="primary"
                    >
                        Logar
                    </StyledButton>
                </form>
                <StyledButton variant="contained" color="primary" fullWidth>
                    Cadastre-se
                </StyledButton>
            </StyledPaperLogin>
        </Grid>
    )
}

export default LoginForm;
