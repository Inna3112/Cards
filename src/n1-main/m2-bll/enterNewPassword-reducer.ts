type ActionsType = any

const initialState = {

}

export const enterNewPasswordReducer = (state = initialState, action: ActionsType): typeof initialState => {
    switch (action.type) {

        default: return state
    }
}

export const AC = () => ({type: 'ANY-TYPE'}) as const