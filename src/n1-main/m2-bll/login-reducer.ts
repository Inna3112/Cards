import {Dispatch} from 'redux';
import {authAPI} from '../m3-dal/api';

const initialState = {
    userId: '',
    email: '',
    isAuth: false,
    isLoggedIn: false,
    error: '',
    isLoading: false,
}

export const loginReducer = (state = initialState, action: ActionsType): typeof initialState => {
    switch (action.type) {
        case "IS-LOGGED-IN-CHANGE": {
            return {
                ...state, isLoggedIn: action.isLoggedIn
            }
        }
        case "SET-ERROR": {
            return {
                ...state, error: action.error
            }
        }
        case "SET-IS-LOADING": {
            return {
                ...state, isLoading: action.isLoading
            }
        }
        case "SET-AUTH-USER-DATA":{
            return {
                ...state,
                userId: action.userId,
                email: action.email,
                isAuth: action.isAuth
            }
        }
        default:
            return state
    }
}
// AC
export const isLoggedInChange = (isLoggedIn: boolean) => ({type: 'IS-LOGGED-IN-CHANGE', isLoggedIn}) as const
export const setError = (error: string) => ({type: 'SET-ERROR', error}) as const
export const setIsLoading = (isLoading: boolean) => ({type: 'SET-IS-LOADING', isLoading}) as const
export const setAuthUserData = (userId: string, email: string, isAuth: boolean) => ({
    type: 'SET-AUTH-USER-DATA',
        userId: userId,
        email: email,
        isAuth: isAuth,
}) as const
// thunks
export const loginSuccess = (loginData: LoginDataType) => (dispatch:any) => {
    dispatch(setIsLoading(true))
    authAPI.login(loginData.email, loginData.password, loginData.rememberMe)
        .then(() => {
            dispatch(setIsLoading(false))
            dispatch(isLoggedInChange(true))
            // dispatch(getMe())
            dispatch(setError(''))
        })
        .catch((error) => {
            dispatch(setIsLoading(false))
            dispatch(isLoggedInChange(false))
            // dispatch(setError(error.response.data.error))
        })
}
export const logoutSuccess = () => (dispatch: Dispatch) => {

    authAPI.logout()
        .then(() => {

            dispatch(setAuthUserData('', '', false))
            dispatch(isLoggedInChange(false))
        })
        .catch((error) => {
            dispatch(setError(error.response.data.error))
        })
}

export const getMe = () => {
    debugger
    return async (dispatch: any) => {
        const res = await authAPI.me()
        let {_id, email} = res.data
        dispatch(setAuthUserData(_id, email, true))
    }
}


// types
type ActionsType = ReturnType<typeof isLoggedInChange>
    | ReturnType<typeof setError>
    | ReturnType<typeof setIsLoading>
    | ReturnType<typeof setAuthUserData>

type LoginDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
}