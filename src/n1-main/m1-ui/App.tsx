import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import Main from './Main';
import {setProfileSuccess} from '../m2-bll/auth-reducer';
import {AppRootStateType} from '../m2-bll/store';
import {Redirect} from 'react-router-dom';
import {PATH} from './routes/Routes';


const App = () => {
    const dispatch = useDispatch()
    const {isAuth, error} = useSelector((state: AppRootStateType) => state.auth)

    useEffect(() => {
        if (isAuth) {
            dispatch(setProfileSuccess())
        }
    }, [dispatch, isAuth])

    if (error) {
        return <Redirect to={PATH.LOGIN}/>
    }
    return (
        <div className="App">
            <Main/>
        </div>
    )
}
export default App;
