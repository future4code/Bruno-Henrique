import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToFeedPage } from '../Routes/Coordinator'

export const usePublicPage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            goToFeedPage(history)
        }
    }, [history])
}
