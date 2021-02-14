import React, { useEffect } from 'react'

import { useHistory } from 'react-router-dom';
import LoginForm from '../components/LoginForm'

import Header from '../components/Header';

const LoginPage = () => {

    const history = useHistory();

    const handleBtnHome = () => {
        history.push("/")
    }

    const handleBtnCreate = () => {
        history.push("/trips/create")
    }

    // useEffect(() => {
    //     const token = localStorage.getItem("admToken");

    //     if (token) {
    //         history.push("/trips/create");
    //     }
    // }, [history]);


    return (
        <div>
            <Header />
            <LoginForm 
                history={history}
            />

            {/* <h1>Pagina de login</h1>
            <button onClick={handleBtnHome}>Home</button>

            {window.localStorage.getItem("admToken") ?
                <p>{`Usuario ${formLogin.email} esta logado!`}</p> :
                <div>
                    <button onClick={handleBtnCreate}>Criar viagem</button>
                    <form onSubmit={handleBtnLogin}>
                        <h3>Login</h3>
                        <label>Usuário</label>
                        <input
                            name="email"
                            value={formLogin.email}
                            onChange={handleLogin}
                            required
                        />
                        <label>Senha</label>
                        <input
                            name="password"
                            value={formLogin.password}
                            onChange={handleLogin}
                            required
                        />
                        <button>Entrar</button>
                    </form>
                </div>

            } */}
        </div>
    )
};

export default LoginPage;