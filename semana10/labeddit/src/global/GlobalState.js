import React, { useEffect, useState } from "react";

import axios from "axios";
import { baseURL } from '../components/constants/baseURL'
import GlobalStateContext from './GlobalStateContext'

export default function GlobalState(props) {
    const [token, setToken] = useState("")
    const [handleBtnLoginText, setHandleBtnLoginText] = useState(token ? "Logout" : "Login")

    const states = { token, handleBtnLoginText }
    const setters = { setToken, setHandleBtnLoginText }
    const requests = {}

    const data = { states, setters }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
