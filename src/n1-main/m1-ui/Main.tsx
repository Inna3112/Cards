import React from 'react';
import Header from './header/Header';
import Routes from './routes/Routes';
import {Login} from '../../n2-features/f1-auth/Login/Login';
import { useSelector} from 'react-redux';
import {AppRootStateType} from '../m2-bll/store';

function Main() {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)

    return (
        <div>
            {
                isAuth
                    ?
                    <div>
                        <Header/>
                        <Routes/>
                    </div>
                    : <Login />
            }
        </div>
    );
}

export default Main;
