import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import CardComponent from '../components/CardComponent';
import useShowListTrips from '../hooks/useShowListTrips'

const TripListPage = () => {
    const history = useHistory();
    const [list, handleList] = useShowListTrips()

    useEffect(() => {
        handleList()
    })

    return (
        <Grid container>
            {list.map((trip) => {
                return (
                    <CardComponent
                        planet={trip.planet}
                        descrition={trip.date}
                    />
                    // <div key={trip.id}>
                    //     <p>{trip.id}</p>
                    //     <p>{trip.descrition}</p>
                    //     <p>{trip.planet}</p>
                    //     <p>{trip.name}</p>
                    //     <p>{trip.durationInDays}</p>
                    //     <p>{trip.date}</p>
                    //     <hr />
                    // </div>
                )
            })}
        </Grid>
    )
};

export default TripListPage;