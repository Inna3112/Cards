import {getMe} from "./login-reducer";

const initialState = {
    isInitialized: false,
}

export const appReducer = (state = initialState, action: ActionsType): typeof initialState => {
    switch (action.type) {
        case 'INITIALIZED':
            return {
                ...state,
                isInitialized: true
            }

        default:
            return state
    }
}
// AC
export const initialized = () => ({
        type: 'INITIALIZED'
    }
) as const

// thunks
export const initializeApp = () => {
    return (dispatch: any) => {
        let dispatchResult = dispatch(getMe())
        Promise.all([dispatchResult])
            .then(() => {
                dispatch(initialized())
            })
    }
}



// types
type ActionsType = ReturnType<typeof initialized>
