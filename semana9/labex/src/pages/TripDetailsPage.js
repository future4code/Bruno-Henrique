import React from 'react'
import { useRequestLogin } from '../hooks/useRequestLogin'

const TripDeatailsPage = () => {
    useRequestLogin()
    
    return(
        <h1>Detalhes da Viagem</h1>
    )
};

export default TripDeatailsPage;