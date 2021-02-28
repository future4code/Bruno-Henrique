import React from 'react'
import LoginForm from '../../components/forms/LoginForm'
import { usePublicPage } from '../../hooks/usePublicPage'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { MainContainer, FormContainer, StyledBackground } from './style'

export default function LoginPage() {
    usePublicPage()
    return (
        <MainContainer container component='main'>
            <Grid item xs={false} sm={4} md={7}>
                <StyledBackground />
            </Grid>
            <FormContainer item xs={12} sm={8} md={5}>
                <Typography variant="h2" gutterBottom >LabEddit</Typography>
                <LoginForm />
            </FormContainer>
        </MainContainer>
    )
}
