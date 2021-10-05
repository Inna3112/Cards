import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from 'react-redux';
import Main from './Main';
import {setProfileSuccess} from '../m2-bll/auth-reducer';


const App = () => {
    const dispatch = useDispatch()
    // const {isAuth, error} = useSelector((state: AppRootStateType) => state.auth)

    useEffect(() => {
        // if (!isAuth) {
            dispatch(setProfileSuccess())
        // }
    }, [dispatch])

    // if (error) {
    //     return <Redirect to={PATH.LOGIN}/>
    // }
    return (
        <div className="App">
            <Main/>
        </div>
    )
}
export default App;
