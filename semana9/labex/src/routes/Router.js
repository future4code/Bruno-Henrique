import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import AplicationFormPage from '../pages/AplicationFormPage'
import TripCreatorPage from '../pages/TripCreatorPage'
import TripDeatailsPage from '../pages/TripDetailsPage'
import TripListPage from '../pages/TripListPage'
import ErrorPage from '../pages/ErrorPage'

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/aplication-form">
                    <AplicationFormPage />
                </Route>
                <Route exact path="/trips/create">
                    <TripCreatorPage />
                </Route>
                <Route exact path="/trips/list">
                    <TripListPage />
                </Route>
                <Route exact path="/trips/details">
                    <TripDeatailsPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}






