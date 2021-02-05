import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useGetRequest(url, initialState) {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        axios.get(url)
            .then((res) => { 
                setData(res.data.trips)
            })
            .catch((err) => { 
                console.log(err)
            })
    }, [url])


    return data;
}

