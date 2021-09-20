import {Dispatch} from 'redux';
import {authAPI} from '../m3-dal/api';
import {setError, setIsLoading} from './login-reducer';

const initialState = {
    forgotEmail: ''
}

export const passwordRecoverReducer = (state = initialState, action: ActionsType): typeof initialState => {
    switch (action.type) {
        case "SET-FORGOT-EMAIL":{
            return {
                ...state, forgotEmail: action.email
            }
        }
        default:
            return state
    }
}

// AC
export const setForgotEmail = (email: string) => ({type: 'SET-FORGOT-EMAIL', email}) as const

// Thunks
export const setEmailSuccess = (email: string) => (dispatch: Dispatch) => {
    dispatch(setIsLoading(true))
    authAPI.forgot(email)
        .then(() => {
            dispatch(setIsLoading(false))
            dispatch(setForgotEmail(email))
            dispatch(setError(''))
        })
        .catch((error) => {
            dispatch(setIsLoading(false))
            dispatch(setError(error.response.data.error))
        })
}

// Types
type ActionsType = ReturnType<typeof setForgotEmail>