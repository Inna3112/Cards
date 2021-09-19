import {Dispatch} from 'redux';
import {authAPI} from '../m3-dal/api';

type ActionsType = ReturnType<typeof setRegister> | ReturnType<typeof isRegisterChange>

const initialState = {
    authData: {
        email: '',
        password: ''
    },
    isRegistered: false,
}

export const registrationReducer = (state = initialState, action: ActionsType): typeof initialState => {
    switch (action.type) {
        case "SET-REGISTER": {
            return {
                ...state, authData: {...state.authData}
            }
        }
        case "IS-REGISTER-CHANGE": {
            return {
                ...state, isRegistered: action.isRegistered
            }
        }
        default:
            return state
    }
}

export const setRegister = () => ({type: 'SET-REGISTER'}) as const
export const isRegisterChange = (isRegistered: boolean) => ({type: 'IS-REGISTER-CHANGE', isRegistered}) as const

export const registerSuccess = (email: string, password: string) => (dispatch: Dispatch) => {
    authAPI.register(email, password)
        .then(() => {
            dispatch(setRegister())
            dispatch(isRegisterChange(true))
        })
        .catch(() => {
            dispatch(isRegisterChange(true))
        })
}