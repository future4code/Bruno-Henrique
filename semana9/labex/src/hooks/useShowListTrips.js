import { useState } from 'react'
import axios from 'axios'
import {baseURL} from "../api/baseURL"

export default function useShowListTrips() {
    const [listTrips, setListTrips] = useState([])

    const handleShowList = () => { 
        axios.get(`${baseURL}/trips`)
        .then((response)=>{
            setListTrips(response.data.trips)
           
        })
        .catch((error)=>{
            console.log(error)
        })    
    }

    return [listTrips, handleShowList];
}
