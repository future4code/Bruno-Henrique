import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { baseURL } from '../API/Api'
import { Avatar, ListContainer } from './StyledPages'

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
            <div>
                {matchList.map((match) => {
                    return (
                        <ListContainer>
                            <Avatar src={match.photo}/>
                            <p>{match.name}</p>
                        </ListContainer>
                    )
                })}
            </div>


        </div>
    )
}
export default UserProfile;