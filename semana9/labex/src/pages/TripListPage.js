import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import useShowListTrips from '../hooks/useShowListTrips'

const TripListPage = () => {
    const history = useHistory();
    const [list, handleList] = useShowListTrips()

    useEffect(() => {
        handleList()
    })

    return (
        <div>
            {list.map((trip) => {
                return (
                    <div key={trip.id}>
                        <p>{trip.id}</p>
                        <p>{trip.descrition}</p>
                        <p>{trip.planet}</p>
                        <p>{trip.name}</p>
                        <p>{trip.durationInDays}</p>
                        <p>{trip.date}</p>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
};

export default TripListPage;