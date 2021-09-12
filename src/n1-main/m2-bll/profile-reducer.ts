type ActionsType = any

const initialProfileState = {

}


export const profileReducer = (state = initialProfileState, action: ActionsType): typeof initialProfileState=> {
    switch (action.type) {

        default: return state
    }
}

export const AC = () => ({type: 'ANY-TYPE'}) as const