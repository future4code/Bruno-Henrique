import React from 'react'
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    const history = useHistory();

    return(
        <div>
            <h1>Pagina principal</h1>
        </div>
    )
};

export default HomePage;