import { useLayoutEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalStateContext from '../global/GlobalStateContext'
import { goToLoginPage } from '../Routes/Coordinator'

export const useProtectedPage = () => {
    const history = useHistory()
    const { states, setters } = useContext(GlobalStateContext)

    useLayoutEffect(() => {
        const token = states.token
        if (!token) {
            goToLoginPage(history)
        }
    }, [history])
}
