import React from 'react'
import { usePublicPage } from '../../hooks/usePublicPage'

import SignUp from '../../components/forms/SignUpForm'

export default function SignUpPage() {
    usePublicPage()
    return (
        <SignUp />
    )
}