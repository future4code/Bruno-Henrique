import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useRequestLogin = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("admToken")

        if (!token) {
            history.push("/login")
        }
    }, [history]);
};
