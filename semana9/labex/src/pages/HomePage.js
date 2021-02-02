import React from 'react'
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    const history = useHistory();

    const handleBtnForm = () => {
        history.push("/aplication-form")
    }

    const handleBtnLogin = () => {
        history.push("/login")
    }

    return(
        <div>
            <h1>Pagina principal</h1>
            <button onClick={handleBtnForm}>Formulario</button>
            <button onClick={handleBtnLogin}>Login</button>
        </div>
    )
};

export default HomePage;