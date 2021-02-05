import React from 'react'
import { useHistory } from 'react-router-dom';
import useGetRequest from "../hooks/useGetRequest";
import { baseURL } from '../api/baseURL'


const TripListPage = () => {
    const history = useHistory();
    const trips = useGetRequest(`${baseURL}/trips`, [])

    return (
        <div>
            <h2>Viagens Disponiveis</h2>
            {trips.map((trip) => {
                return (
                    <div key={trip.id}>
                        <p>{trip.date}</p>
                        <p>{trip.planet}</p>
                        <p>{trip.description}</p>
                        <p>{trip.durationInDays} dias</p>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
};

export default TripListPage;