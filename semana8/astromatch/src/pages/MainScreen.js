import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { baseURL } from "../API/Api";


function MainScreen() {
    const [astroProfile, setAstroProfile] = useState({})

    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = () => {
        axios.get(`${baseURL}/person`)
            .then((response) => {
                setAstroProfile(response.data.profile)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleBtnChoose = (id, choice) => {
        const body = {
            "id": id,
            "choice": choice
        }
        axios.post(`${baseURL}/choose-person`, body)
            .then((response) => {
                getProfile()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <h2>Match?</h2>
            {astroProfile ? (
                <div>
                    <p>{astroProfile.name}</p>
                    <button onClick={() => handleBtnChoose(astroProfile.id, true)}>Yes</button>
                    <button onClick={() => handleBtnChoose(astroProfile.id, false)}>No</button>
                </div>) : <p>Nenhum perfil encontrado</p>}
        </div>
    )
}
export default MainScreen;