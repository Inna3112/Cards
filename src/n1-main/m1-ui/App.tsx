import React, {useEffect} from 'react';
import './App.css';
import Header from './header/Header';
import Routes from './routes/Routes';
import {Login} from '../../n2-features/f1-auth/Login/Login';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../m2-bll/store';
import {setProfileSuccess} from '../m2-bll/profile-reducer';


const App = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)

    useEffect(() => {
        dispatch(setProfileSuccess())
    }, [dispatch])

    return (
        <div className="App">
            {
                isLoggedIn
                    ?
                    <div>
                        <Header/>
                        <Routes/>
                    </div>
                    : <Login />
            }
        </div>
    )
}
export default App;
