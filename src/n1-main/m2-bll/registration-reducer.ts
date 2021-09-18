import {Dispatch} from 'redux';
import {authAPI} from '../m3-dal/api';

type ActionsType = ReturnType<typeof setRegister> | ReturnType<typeof isRegisterChange>

const initialState = {
    authData: {
        email: '',
        password: ''
    },
    isRegister: false,
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
                ...state, isRegister: action.isRegister
            }
        }
        default:
            return state
    }
}

export const setRegister = () => ({type: 'SET-REGISTER'}) as const
export const isRegisterChange = (isRegister: boolean) => ({type: 'IS-REGISTER-CHANGE', isRegister}) as const

export const registerSuccess = (email: string, password: string) => async (dispatch: Dispatch) => {
   try{
       const result = await authAPI.register(email, password)
       dispatch(setRegister())
       dispatch(isRegisterChange(true))
   } catch (error){
       dispatch(isRegisterChange(false))
   }
}