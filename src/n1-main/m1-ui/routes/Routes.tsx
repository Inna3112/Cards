import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom';
import {Login} from './pages/Login/Login';
import {Profile} from './pages/Profile/Profile';
import {Error404} from './pages/Error404';
import {Register} from './pages/Register/Register';
import {Forgot} from './pages/Forgot/Forgot';
import {SetPassword} from './pages/SetPassword/SetPassword';
import {Main} from './pages/Main';

export const PATH = {
    MAIN: '/main',
    LOGIN: '/login',
    REGISTER: '/register',
    PROFILE: '/profile',
    FORGOT: '/forgot',
    SET_PASSWORD: '/set-new-password',
    ERROR404: '/error404'
}

export const Routes = () => {
    return (
        <div>
            <Switch>
            <Route path={'/'} exact render={() => <Redirect to={PATH.PROFILE}/>}/>
            <Route path={PATH.MAIN} render={() => <Main />}/>
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
