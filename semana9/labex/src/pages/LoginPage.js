import React, { useEffect } from 'react'

import axios from 'axios'

import { useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm'
// import { useInput } from '../hooks/useInput';

import { baseURL } from '../api/baseURL'
import Header from '../components/Header';


const LoginPage = () => {
    const [formLogin, handleLogin] = useForm({ email: "", password: "" })

    const history = useHistory();

    const handleBtnHome = () => {
        history.push("/")
    }

    const handleBtnCreate = () => {
        history.push("/trips/create")
    }

    useEffect(() => {
        const token = localStorage.getItem("admToken");

        if (token) {
            history.push("/trips/create");
        }
    }, [history]);

    const handleBtnLogin = (event) => {
        event.preventDefault()

        axios.post(`${baseURL}/login`, formLogin)
            .then((res) => {
                localStorage.setItem("admToken", res.data.token)
                history.push("/trips/create")
            })
            .catch((error) => {
                alert("Usuario ou senha incorretos!")
                console.log(error)
            })
    }

    return (
        <div>
            <Header />
            <h1>Pagina de login</h1>
            <button onClick={handleBtnHome}>Home</button>
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
    )
};

export default LoginPage;