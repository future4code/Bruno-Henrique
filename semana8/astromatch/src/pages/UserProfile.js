import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { baseURL } from '../API/Api'

function UserProfile() {
    const [matchList, setMatchList] = useState([])

    useEffect(() => { 
        getMatches()
    })

    const getMatches = () => {
        axios.get(`${baseURL}/matches`)
            .then((response) => {
                setMatchList(response.data.matches)
            })
            .catch((error) => { 
                console.log(error)
            })
    } 

    return (
        <div>
            <h2>Perfil de usuario</h2>
            {matchList.map((match)=>{
                return(
                    <div>{match.name}</div>
                )
            })}

        </div>
    )
}
export default UserProfile;