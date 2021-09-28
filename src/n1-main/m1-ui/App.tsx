import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import Main from './Main';
import {setProfileSuccess} from '../m2-bll/profile-reducer';
import {AppRootStateType} from '../m2-bll/store';


const App = () => {
    const dispatch = useDispatch()
    const {packName, maxCardsCount,
        minCardsCount, sortPacks,
        page, pageCount, user_id} = useSelector((state: AppRootStateType) => state.packs)

    useEffect(() => {
        dispatch(setProfileSuccess())
    }, [dispatch, packName, minCardsCount, maxCardsCount, sortPacks, page, pageCount, user_id])

    return (
        <div className="App">
            <Main />
        </div>
    )
}
export default App;
