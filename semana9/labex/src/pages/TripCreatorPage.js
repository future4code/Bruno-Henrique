import React from 'react'

import { useRequestLogin } from '../hooks/useRequestLogin'

const TripCreatorPage = () => {
    useRequestLogin()
    
    return (
        <h1>Criar Viagem</h1>
    )
};

export default TripCreatorPage;