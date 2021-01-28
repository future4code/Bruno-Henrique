import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { baseURL } from "../API/Api";


function MainScreen(props) {

    const [astroProfile, setAstroProfile] = useState({})

    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = async () => {
        try {
            const response = await axios.get(`${baseURL}/person`)
            setAstroProfile(response.data.profile)
        } catch (error) {
            console.log(error)
        }
    }

    const handleBtnChoose = (id, option) => {
        const body = {
            "id": id,
            "choice": option
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
            <button onClick={getProfile}>Perfil</button>
            <p>{astroProfile.name}</p>
            <button onClick={() => handleBtnChoose(astroProfile.id, true)}>Yes</button>
            <button onClick={() => handleBtnChoose(astroProfile.id, false)}>No</button>
        </div>
    )
}
export default MainScreen;