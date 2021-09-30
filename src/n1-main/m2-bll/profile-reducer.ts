import {authAPI} from '../m3-dal/api';
import {Dispatch} from 'redux';
import {setError, setUser} from './login-reducer';

const initialState = {
    // userProfile: {
    //     _id: '',
    //     email: '',
    //     name: '',
    //     avatar: '',
    //     publicCardPacksCount: 0,
    // },
    // isAuth: false
}

export const profileReducer = (state = initialState, action: ActionsType): typeof initialState => {
    switch (action.type) {
        // case "SET-PROFILE": {
        //     return {
        //         ...state,
        //         userProfile: {...action.userProfile},
        //         isAuth: action.isAuth
        //     }
        // }
        default:
            return state
    }
}

// export const setProfile = (userProfile: UserType, isAuth: boolean) => ({type: 'SET-PROFILE', userProfile, isAuth}) as const

export const setProfileSuccess = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then((res) => {
            // dispatch(setProfile({
            //     _id: res.data._id,
            //     email: res.data.email,
            //     name: res.data.name,
            //     avatar: res.data.avatar,
            //     publicCardPacksCount: res.data.publicCardPacksCount
            // }, true))
            dispatch(setUser(res.data, true))
        })
        .catch((error) => {
            // dispatch()
        })
}
export const updateProfileSuccess = (name: string, avatar: string) => (dispatch: Dispatch) => {
    authAPI.updateMe(name, avatar)
        .then((res) => {
            dispatch(setUser({
                _id: res.data.updatedUser._id,
                email: res.data.updatedUser.email,
                name: res.data.updatedUser.name,
                avatar: res.data.updatedUser.avatar,
                publicCardPacksCount: res.data.updatedUser.publicCardPacksCount,
                created: res.data.updatedUser.created,
                updated: res.data.updatedUser.updated,
                isAdmin: res.data.updatedUser.isAdmin,
                verified: res.data.updatedUser.verified,
                rememberMe: res.data.updatedUser.rememberMe
            }, true))
        })
        .catch((error) => {
            dispatch(setError(error.response.data.error))
        })
}


// types
type ActionsType = ReturnType<typeof setUser>
