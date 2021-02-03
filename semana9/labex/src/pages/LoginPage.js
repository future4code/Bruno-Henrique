import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { useHistory } from 'react-router-dom';
import { useInput } from '../hooks/useInput';

import { baseURL } from '../api/baseURL'


const LoginPage = () => {
    const [user, handleUser] = useInput()
    const [password, handlePassword] = useInput()

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

    useEffect(() => {
        const token = localStorage.getItem("admToken");
    
        if (token) {
          history.push("/trips/create");
        }
      }, [history]);

    const handleBtnLogin = () => {
        const body = {
            email: user,
            password: password
        };

        axios.post(`${baseURL}/login`, body)
            .then((res) => {
                localStorage.setItem("admToken", res.data.token)
                history.push("/")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <h1>Pagina de login</h1>
            {/* <button onClick={handleBtnHome}>Home</button>
            <button onClick={handleBtnList}>Lista de Viagens</button>
            <button onClick={handleBtnCreate}>Adicionar Viagens</button>
            <button onClick={handleBtnDetails}>Detalhes da Viagem</button> */}
            <div>
                <h3>Login</h3>
                <label>Usuário</label>
                <input value={user} onChange={handleUser} />
                <label>Senha</label>
                <input value={password} onChange={handlePassword} />
                <button onClick={handleBtnLogin}>Entrar</button>
            </div>

        </div>
    )
};

export default LoginPage;