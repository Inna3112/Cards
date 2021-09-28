import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import Main from './Main';
import {AppRootStateType} from "../m2-bll/store";


const App = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)

    // useEffect(() => {
    //     dispatch(getMe())
    // }, [dispatch])
    return (
        <div className="App">
            <Main />
        </div>
    )
}
export default App;
