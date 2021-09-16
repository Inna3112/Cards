import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom';
import {Login} from './pages/Login';
import {Profile} from './pages/Profile';
import {Error404} from './pages/Error404';
import {Register} from './pages/Register';
import {Forgot} from './pages/Forgot';
import {SetPassword} from './pages/SetPassword';

export const PATH = {
    LOGIN: '/login',
    REGISTER: '/register',
    PROFILE: '/profile',
    FORGOT: '/forgot',
    SET_PASSWORD: '/set-password',
}

export const Routes = () => {
    return (
        <div>
            <Switch>
            <Route path={'/'} exact render={() => <Redirect to={PATH.PROFILE}/>}/>
            <Route path={PATH.LOGIN} render={() => <Login />}/>
            <Route path={PATH.REGISTER} render={() => <Register />}/>
            <Route path={PATH.PROFILE} render={() => <Profile />}/>
            <Route path={PATH.SET_PASSWORD} render={() => <SetPassword />}/>
            <Route path={PATH.FORGOT} render={() => <Forgot />}/>
            <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    )
}

export default Routes
