import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom';
import {Login} from './pages/Login';
import {Profile} from './pages/Profile';
import {Error404} from './pages/Error404';
import {Registration} from "./pages/Registration";

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile'
}

export const Routes = () => {
    return (
        <div>
            <Switch>
            <Route path={'/'} exact render={() => <Redirect to={PATH.PROFILE}/>}/>
            <Route path={PATH.LOGIN} render={() => <Login />}/>
            <Route path={PATH.REGISTRATION} render={() => <Registration />}/>
            <Route path={PATH.PROFILE} render={() => <Profile />}/>
            <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    )
}

export default Routes
