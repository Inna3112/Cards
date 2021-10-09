import React from 'react';
import './App.css';
import Main from './Main';


const App = () => {
    // const dispatch = useDispatch()
    // const {isAuth, error} = useSelector((state: AppRootStateType) => state.auth)
    //
    // useEffect(() => {
    //     if (!isAuth) {
    //         dispatch(setProfileSuccess())
    //     } else{
    //         dispatch(setPacksSuccess())
    //     }
    // }, [dispatch])
    //
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
