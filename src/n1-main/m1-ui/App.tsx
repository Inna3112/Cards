import React, {useEffect} from 'react';
import './App.css';
import Header from './header/Header';
import Routes from './routes/Routes';
import {AppRootStateType} from '../m2-bll/store';
import {useDispatch, useSelector} from 'react-redux';
import {setProfileSuccess} from '../m2-bll/profile-reducer';


const App = () => {
    const dispatch = useDispatch()
    const initialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)

    // useEffect(() => {
    //     dispatch(initializeApp())
    // }, [dispatch])

    useEffect(() => {
        dispatch(setProfileSuccess())
    }, [dispatch])

    // if (!initialized) {
    //     return (<h1>Loading...</h1>)
    // } else {
        return (
            <div className="App">
                <Header/>
                <Routes/>
            </div>
        );
}
export default App;
