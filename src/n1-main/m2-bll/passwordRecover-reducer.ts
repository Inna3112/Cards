

const initialState = {

}

export const passwordRecoverReducer = (state = initialState, action: ActionsType): typeof initialState => {
    switch (action.type) {

        default: return state
    }
}

// AC
export const AC = () => ({type: 'ANY-TYPE'}) as const

// Thunks


// Types
type ActionsType = any