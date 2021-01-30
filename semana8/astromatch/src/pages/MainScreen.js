import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { baseURL } from "../API/Api";

import { ContainnerMainScreen, ProfileImg, StyledButtons } from './StyledPages'



function MainScreen() {
    const [astroProfile, setAstroProfile] = useState({})

    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = () => {
        axios.get(`${baseURL}/person`)
            .then((response) => {
                setAstroProfile(response.data.profile)
                // console.log(response.data.profile)
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
                <ContainnerMainScreen>
                    <p>{astroProfile.name}</p>
                    <ProfileImg src={astroProfile.photo} />
                    <StyledButtons>
                        <button onClick={() => handleBtnChoose(astroProfile.id, true)}>Yes</button>
                        <button onClick={() => handleBtnChoose(astroProfile.id, false)}>No</button>
                    </StyledButtons>

                </ContainnerMainScreen>) : <p>Nenhum perfil encontrado</p>}
        </div>
    )
}
export default MainScreen;