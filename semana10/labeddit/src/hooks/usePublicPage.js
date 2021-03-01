import { useLayoutEffect, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import GlobalStateContext from '../global/GlobalStateContext'
import { goToFeedPage } from '../Routes/Coordinator'

export const usePublicPage = () => {
    const history = useHistory()
    const { states, setters } = useContext(GlobalStateContext)

    useLayoutEffect(() => {
        const token = states.token
        if (token) {
            goToFeedPage(history)
        }
    }, [history])
}
