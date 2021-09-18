import {Dispatch} from 'redux';
import {authAPI} from '../m3-dal/api';

type ActionsType = ReturnType<typeof setRegister>

const initialState = {
    email: '',
    password: '',
}

export const registrationReducer = (state = initialState, action: ActionsType): typeof initialState => {
    switch (action.type) {
        case "SET-REGISTER":{
            return {
                ...state
            }
        }
        default:
            return state
    }
}

export const setRegister = () => ({type: 'SET-REGISTER'}) as const

export const registerSuccess = (email: string, password: string) => async (dispatch: Dispatch) => {
    const result = authAPI.register(email, password)
    dispatch(setRegister())
}