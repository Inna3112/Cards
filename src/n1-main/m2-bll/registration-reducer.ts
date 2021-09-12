type ActionsType = any

const initialRegistrationState = {

}

export const registrationReducer = (state = initialRegistrationState, action: ActionsType): typeof initialRegistrationState=> {
    switch (action.type) {

        default: return state
    }
}

export const AC = () => ({type: 'ANY-TYPE'}) as const