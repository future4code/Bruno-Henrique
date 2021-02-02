import React from 'react'
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const history = useHistory();

    const handleBtnHome = () => {
        history.push("/")
    }
    const handleBtnList = () => {
        history.push("/trips/list")
    }
    const handleBtnCreate = () => {
        history.push("/trips/create")
    }
    const handleBtnDetails = () => {
        history.push("/trips/details")
    }

    return (
        <div>
            <h1>Pagina de login</h1>
            <button onClick={handleBtnHome}>Home</button>
            <button onClick={handleBtnList}>Lista de Viagens</button>
            <button onClick={handleBtnCreate}>Adicionar Viagens</button>
            <button onClick={handleBtnDetails}>Detalhes da Viagem</button>

        </div>
    )
};

export default LoginPage;