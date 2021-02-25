import React, { useEffect, useState } from "react";

import axios from "axios";
import { baseURL } from '../components/constants/baseURL'
import GlobalStateContext from './GlobalStateContext'

export default function GlobalState(props) {
    const [token, setToken] = useState("")

    const states = { token }
    const setters = { setToken }
    const requests = {}

    const data = { states, setters }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
