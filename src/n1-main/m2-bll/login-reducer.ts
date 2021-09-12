type ActionsType = any

const initialLoginState = {

}

export const loginReducer = (state = initialLoginState, action: ActionsType): typeof initialLoginState => {
    switch (action.type) {

        default: return state
    }
}

export const AC = () => ({type: 'ANY-TYPE'}) as const