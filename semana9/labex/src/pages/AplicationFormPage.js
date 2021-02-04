import React from 'react'
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';

const AplicationFormPage = () => {
    const history = useHistory();

    const handleBtnHome = () => {
        history.push("/")
    } 

    return (
        <div>
            <Header />
            <h1>Pagina de inscrição</h1>
            <button onClick={handleBtnHome}>Home</button>
        </div>
    )
};

export default AplicationFormPage;