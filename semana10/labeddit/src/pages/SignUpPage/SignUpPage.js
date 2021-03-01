import React from 'react'
import { usePublicPage } from '../../hooks/usePublicPage'

import SignUpForm from '../../components/forms/SignUpForm'

export default function SignUpPage() {
    usePublicPage()
    return (
        <SignUpForm />
    )
}