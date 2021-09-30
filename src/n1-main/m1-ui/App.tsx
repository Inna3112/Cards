import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import Main from './Main';
import {setProfileSuccess} from '../m2-bll/profile-reducer';
import {AppRootStateType} from "../m2-bll/store";
import {UserType} from "../m3-dal/api";


const App = () => {
    const dispatch = useDispatch()
    const user = useSelector<AppRootStateType, UserType>(state => state.login.user)

    useEffect(() => {
        if(!user){
            dispatch(setProfileSuccess())
        }
    }, [dispatch])

    return (
        <div className="App">
            <Main />
        </div>
    )
}
export default App;
