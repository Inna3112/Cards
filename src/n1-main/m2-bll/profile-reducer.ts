import {UserType} from '../m3-dal/api';


const initialState = {
    userProfile: {
        avatar: '',
        created: '',
        deviceTokens: [{_id: '', device: ''},],
        email: '',
        isAdmin: false,
        name: '',
        publicCardPacksCount: 0,
        rememberMe: false,
        token: '',
        tokenDeathTime: 0,
        updated: '',
        verified: false,
        __v: 0,
        _id: '',
    }
}


export const profileReducer = (state = initialState, action: ActionsType): typeof initialState => {
    switch (action.type) {
        case "SET-PROFILE":{
            debugger
            return {
                ...state, userProfile: {...action.userProfile, deviceTokens: [...action.userProfile.deviceTokens]}
            }
        }
        default:
            return state
    }
}

export const setProfile = (userProfile: UserType) => ({type: 'SET-PROFILE', userProfile}) as const


// types
type ActionsType = ReturnType<typeof setProfile>