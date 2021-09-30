import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from 'react-redux';
import Main from './Main';
import {setProfileSuccess} from '../m2-bll/auth-reducer';


const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setProfileSuccess())
    }, [dispatch])


    return (
        <div className="App">
            <Main/>
        </div>
    )
}
export default App;
