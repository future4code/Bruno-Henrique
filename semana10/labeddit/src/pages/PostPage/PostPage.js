import React from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/header/Header'

import { useProtectedPage } from '../../hooks/useProtectedPage'

export default function PostPage() {
    useProtectedPage()
    const details = useParams()

    return (
        <div>
            <Header/>
            Post
        </div>
    )
}