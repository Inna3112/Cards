import {Dispatch} from 'redux';
import {authAPI, UserType} from '../m3-dal/api';

const initialState = {
    user: {
        _id: '',
        email: '',
        name: '',
        avatar: '',
        publicCardPacksCount: 0,
        created: '',
        updated: '',
        isAdmin: false,
        verified: false,
        rememberMe: false
    },
    isAuth: false,
    isLoggedIn: false,
    error: '',
    isLoading: false,
}

export const authReducer = (state = initialState, action: ActionsType): typeof initialState => {
    switch (action.type) {
        case "SET-USER": {
            return {
                ...state,
                user: {...action.user},
                isAuth: action.isAuth
            }
        }
        case "IS-LOGGED-IN-CHANGE": {
            return {
                ...state, isLoggedIn: action.isLoggedIn
            }
        }
        case "SET-ERROR": {
            return {
                ...state, error: action.error
            }
        }
        case "SET-IS-LOADING": {
            return {
                ...state, isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}
// AC
export const setUser = (user: UserType, isAuth: boolean) => ({type: 'SET-USER', user, isAuth}) as const
export const isLoggedInChange = (isLoggedIn: boolean) => ({type: 'IS-LOGGED-IN-CHANGE', isLoggedIn}) as const
export const setError = (error: string) => ({type: 'SET-ERROR', error}) as const
export const setIsLoading = (isLoading: boolean) => ({type: 'SET-IS-LOADING', isLoading}) as const

export const loginSuccess = (loginData: LoginDataType) => (dispatch: any) => {
    dispatch(setIsLoading(true))
    authAPI.login(loginData.email, loginData.password, loginData.rememberMe)
        .then((res) => {
            dispatch(setIsLoading(false))
            dispatch(isLoggedInChange(true))
            // dispatch(setProfileSuccess())
            dispatch(setUser(res.data, true))
            dispatch(setError(''))
        })
        .catch((error) => {
            dispatch(setIsLoading(false))
            dispatch(isLoggedInChange(false))
            // dispatch(setError(error.response.data.error))
        })
}
export const logoutSuccess = () => (dispatch: Dispatch) => {

    authAPI.logout()
        .then(() => {
            dispatch(setUser({
                _id: '',
                email: '',
                name: '',
                avatar: '',
                publicCardPacksCount: 0,
                created: '',
                updated: '',
                isAdmin: false,
                verified: false,
                rememberMe: false
            }, false))
            dispatch(isLoggedInChange(false))
        })
        .catch((error) => {
            dispatch(setError(error.response.data.error))
        })
}
export const setProfileSuccess = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then((res) => {
            dispatch(setUser(res.data, true))
        })
        .catch((error) => {
            // dispatch()
        })
}
export const updateProfileSuccess = (name: string, avatar: string) => (dispatch: Dispatch) => {
    authAPI.updateMe(name, avatar)
        .then((res) => {
            dispatch(setUser({
                _id: res.data.updatedUser._id,
                email: res.data.updatedUser.email,
                name: res.data.updatedUser.name,
                avatar: res.data.updatedUser.avatar,
                publicCardPacksCount: res.data.updatedUser.publicCardPacksCount,
                created: res.data.updatedUser.created,
                updated: res.data.updatedUser.updated,
                isAdmin: res.data.updatedUser.isAdmin,
                verified: res.data.updatedUser.verified,
                rememberMe: res.data.updatedUser.rememberMe
            }, true))
        })
        .catch((error) => {
            dispatch(setError(error.response.data.error))
        })
}
// types
type ActionsType = ReturnType<typeof isLoggedInChange>
    | ReturnType<typeof setError>
    | ReturnType<typeof setIsLoading>
    | ReturnType<typeof setUser>

type LoginDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
}