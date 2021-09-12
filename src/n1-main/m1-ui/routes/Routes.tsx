import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom';
import {Login} from './pages/Login';
import {Profile} from './pages/Profile';
import {Error404} from './pages/Error404';
import {Registration} from './pages/Registration';
import {PasswordRecover} from './pages/PasswordRecover';
import {EnterNewPassword} from './pages/EnterNewPassword';

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    PASSWORD_RECOVER: '/password-recover',
    ENTER_NEW_PASSWORD: '/enter-new-password',
}

export const Routes = () => {
    return (
        <div>
            <Switch>
            <Route path={'/'} exact render={() => <Redirect to={PATH.PROFILE}/>}/>
            <Route path={PATH.LOGIN} render={() => <Login />}/>
            <Route path={PATH.REGISTRATION} render={() => <Registration />}/>
            <Route path={PATH.PROFILE} render={() => <Profile />}/>
            <Route path={PATH.PASSWORD_RECOVER} render={() => <PasswordRecover />}/>
            <Route path={PATH.ENTER_NEW_PASSWORD} render={() => <EnterNewPassword />}/>
            <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    )
}

export default Routes
