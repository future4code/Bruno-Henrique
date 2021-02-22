import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FeedPage from '../pages/FeedPage/FeedPage'
import PostPage from '../pages/PostPage/PostPage'
import SignInPage from '../pages/SignInPage/SignInPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/signIn">
                    <SignInPage />
                </Route>
                <Route exact path="/signUp">
                    <SignUpPage />
                </Route>
                <Route exact path="/post/:postId">
                    <PostPage />
                </Route>
                <Route exact path={"/feed", "/"}>
                    <FeedPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
