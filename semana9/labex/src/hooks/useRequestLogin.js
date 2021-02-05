import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useRequestLogin = () => {
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("admToken")

        if (!token) {
            history.push("/login")
        }
    }, [history]);
};
