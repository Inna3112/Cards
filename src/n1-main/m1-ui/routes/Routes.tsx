import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom';
import {Main} from './pages/Main';
import {Login} from '../../../n2-features/f1-auth/Login/Login';
import {Register} from '../../../n2-features/f1-auth/Register/Register';
import {Profile} from './pages/Profile/Profile';
import {SetPassword} from '../../../n2-features/f1-auth/SetPassword/SetPassword';
import {Forgot} from '../../../n2-features/f1-auth/Forgot/Forgot';
import {Error404} from './pages/Error404';

export const PATH = {
    MAIN: '/main',
    LOGIN: '/login',
    REGISTER: '/register',
    PROFILE: '/profile',
    FORGOT: '/forgot',
    SET_PASSWORD: '/set-new-password/:token',
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
