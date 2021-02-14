import React from 'react'
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import { useForm } from '../hooks/useForm'
import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 20%;
    margin: 0 auto;
`

const AplicationFormPage = () => {
    const history = useHistory();
    const [aplicationForm, handleAplication] = useForm({
        name: "",
        age: 0,
        applicationText: "",
        profession: "",
        country: ""
    })

    const handleBtnHome = () => {
        history.push("/")
    }

    return (
        <div>
            <Header />
            <h1>Pagina de inscrição</h1>
            {/* <button onClick={handleBtnHome}>Home</button> */}
            <StyledForm>
                <label>Nome:</label>
                <input
                    name="name"
                    value={aplicationForm.name}
                    onChange={handleAplication}
                    required
                />
                <label>Idade:</label>
                <input
                    type="number"
                    name="age"
                    value={aplicationForm.age}
                    onChange={handleAplication}
                    required
                />
                <label>Profissão:</label>
                <input
                    type="text"
                    name="profession"
                    value={aplicationForm.profession}
                    onChange={handleAplication}
                    required
                />
                <label>País:</label>
                <input
                    type="text"
                    name="country"
                    value={aplicationForm.country}
                    onChange={handleAplication}
                    required
                />
                <label>Pq gostaria de ir?</label>
                <textarea
                    name="applicationText"
                    value={aplicationForm.applicationText}
                    onChange={handleAplication}
                    required
                />
                <button>Enviar Formulario</button>
            </StyledForm>
        </div>
    )
};

export default AplicationFormPage;