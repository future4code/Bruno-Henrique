import React from 'react'
import axios from 'axios'
import { baseURL } from '../api/baseURL'
import { useForm } from '../hooks/useForm'
import styled from 'styled-components'
import { useRequestLogin } from '../hooks/useRequestLogin'
import PlanetsComponent from '../components/PlanetsComponent'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
`

const TripCreatorPage = () => {
    useRequestLogin()
    const [formAddTrip, handleAddTrip, handleClear] = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""

    })

    const handleOnClick = (e) => {
        e.preventDefault()
        const token = window.localStorage.getItem("admToken")

        axios.post(`${baseURL}/trips`, formAddTrip, {
            headers: {
                Authorization: token                 
            }
        })
            .then((res) => {
                alert("Viagem criada")
            })
            .catch((err) => {
                console.log(err)
            })

        handleClear()
    }

    return (
        <div>
            <h1>Criar Viagem</h1>
            <StyledForm onSubmit={handleOnClick}>
                <input
                    placeholder="Nome"
                    name="name"
                    value={formAddTrip.name}
                    onChange={handleAddTrip}
                    required
                    pattern="^[A-Za-z0-9]{5,}"
                    title="Mínimo de 5 caracters"
                />
                <PlanetsComponent
                    name={"planet"}
                    value={formAddTrip.planet}
                    handleChange={handleAddTrip}
                />
                <input
                    type="date"
                    placeholder="Data"
                    name="date"
                    value={formAddTrip.date}
                    onChange={handleAddTrip}
                    required
                    pattern=""
                    title="Informe uma data válida"
                />
                <input
                    placeholder="Descrição"
                    name="description"
                    value={formAddTrip.description}
                    onChange={handleAddTrip}
                    required
                    // pattern="^[A-Za-z]{10,}"
                    title=""
                />
                <input
                    type="number"
                    placeholder="Duração em dias"
                    name="durationInDays"
                    value={formAddTrip.durationInDays}
                    onChange={handleAddTrip}
                    required
                    min={50}
                    title="Mínimo de 50 dias"
                />
                <button>Criar</button>
            </StyledForm>

        </div>
    )
};

export default TripCreatorPage;