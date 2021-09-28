import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from 'react-redux';
import {getMe} from '../m2-bll/login-reducer';
import Main from './Main';


const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMe())
    }, [dispatch])
    return (
        <div className="App">
            <Main />
        </div>
    )
}
export default App;
