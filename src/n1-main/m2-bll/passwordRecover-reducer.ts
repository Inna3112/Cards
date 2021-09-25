import {Dispatch} from 'redux';
import {authAPI, ForgotRequestType} from '../m3-dal/api';
import {setError, setIsLoading} from './login-reducer';

const initialState = {
    forgotEmail: '',
    isEmailSet: false,
    isPasswordSet: false,
}

export const passwordRecoverReducer = (state = initialState, action: ActionsType): typeof initialState => {
    switch (action.type) {
        case "SET-FORGOT-EMAIL":{
            return {
                ...state, forgotEmail: action.email
            }
        }
        case "IS-EMAIL-SET-CHANGE": {
            return {
                ...state, isEmailSet: action.isEmailSet
            }
        }
        case "IS-PASSWORD-SET-CHANGE": {
            return {
                ...state, isPasswordSet: action.isPasswordSet
            }
        }
        default:
            return state
    }
}

// AC
export const setForgotEmail = (email: string) => ({type: 'SET-FORGOT-EMAIL', email}) as const
export const isEmailSetChange = (isEmailSet: boolean) => ({type: 'IS-EMAIL-SET-CHANGE', isEmailSet}) as const
export const isPasswordSetChange = (isPasswordSet: boolean) => ({type: 'IS-PASSWORD-SET-CHANGE', isPasswordSet}) as const

// Thunks
export const setEmailSuccess = (email: string) => (dispatch: Dispatch) => {
    let requestObj: ForgotRequestType = {
        email: email,
        from: "test-front-admin <ai73a@yandex.by>",
        message: `<div style="background-color: lime; padding: 15px">		
	        passwordRecoveryLink: <a href='http://localhost:3000/#/set-new-password/$token$'>link</a>
	                </div>`
    }
    dispatch(setIsLoading(true))
    authAPI.forgot(requestObj)
        .then(() => {
            dispatch(setIsLoading(false))
            dispatch(setForgotEmail(email))
            dispatch(isEmailSetChange(true))
            // dispatch(isPasswordSetChange(false))
            dispatch(setError(''))
        })
        .catch((error) => {
            dispatch(isEmailSetChange(false))
            dispatch(setIsLoading(false))
            dispatch(setError(error.response.data.error))
        })
}
export const setNewPasswordSuccess = (password: string, token: string) => (dispatch: Dispatch) => {
    dispatch(setIsLoading(true))

    authAPI.setNewPassword(password, token)
        .then(() => {
            dispatch(isPasswordSetChange(true))
            // dispatch(isEmailSetChange(false))
            dispatch(setIsLoading(false))
            dispatch(setError(''))
        })
        .catch((error) => {
            dispatch(setIsLoading(false))
            dispatch(setError(error.response.data.error))
        })
}

// Types
type ActionsType = ReturnType<typeof setForgotEmail>
| ReturnType<typeof isEmailSetChange>
| ReturnType<typeof isPasswordSetChange>