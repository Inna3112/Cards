import {Dispatch} from 'redux';

const initialState = {

}

export const packsReducer = (state = initialState, action: ActionsType): typeof initialState => {
    switch (action.type) {

        default:
            return state
    }
}
// AC
export const setLogin = () => ({type: 'SET-LOGIN'}) as const

// thunks
export const loginSuccess = () => (dispatch: Dispatch) => {

}


// types
type ActionsType = ReturnType<typeof setLogin>

