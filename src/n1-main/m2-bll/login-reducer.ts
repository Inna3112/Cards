import {Dispatch} from 'redux';
import {authAPI} from '../m3-dal/api';

const initialState = {
    isLoggedIn: false,
    error: '',
    isLoading: false,
}

export const loginReducer = (state = initialState, action: ActionsType): typeof initialState => {
    switch (action.type) {
        case "SET-LOGIN": {
            return {
                ...state
            }
        }
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
        default:
            return state
    }
}
// AC
export const setLogin = () => ({type: 'SET-LOGIN'}) as const
export const isLoggedInChange = (isLoggedIn: boolean) => ({type: 'IS-LOGGED-IN-CHANGE', isLoggedIn}) as const
export const setError = (error: string) => ({type: 'SET-ERROR', error}) as const
export const setIsLoading = (isLoading: boolean) => ({type: 'SET-IS-LOADING', isLoading}) as const

// thunks
export const loginSuccess = (loginData: LoginDataType) => (dispatch: Dispatch) => {
    dispatch(setIsLoading(true))
    authAPI.login(loginData.email, loginData.password, loginData.rememberMe)
        .then(() => {
            dispatch(setIsLoading(false))
            dispatch(setLogin())
            dispatch(isLoggedInChange(true))
        })
        .catch((error) => {
            dispatch(setIsLoading(false))
            dispatch(isLoggedInChange(false))
            dispatch(setError(error.response.data.error))
        })
}

// types
type ActionsType = ReturnType<typeof setLogin>
    | ReturnType<typeof isLoggedInChange>
    | ReturnType<typeof setError>
    | ReturnType<typeof setIsLoading>
type LoginDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
}