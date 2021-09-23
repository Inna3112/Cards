import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})
const instanceForgot = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})


export const authAPI = {
    register(email: string, password: string) {
        return instance.post<ResponseType>('auth/register', {email, password})
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<ResponseType>('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete<InfoResponseType>('auth/me')
    },
    me() {
        return instance.post<ResponseType>('auth/me', {})
    },
    updateMe(name: string, avatar: string) {
        return instance.put<UpdateUserType>('auth/me', {name, avatar})
    },
    forgot(requestData: ForgotRequestType) {
        return instanceForgot.post<InfoResponseType>('auth/forgot', requestData)
    },
    setNewPassword(password: string, resetPasswordToken: string) {
        return instanceForgot.post<InfoResponseType>('auth/new-password', {password, resetPasswordToken})
    }
}
export const packsAPI = {
    getPacks() {
        return instance.get<getPackResponseType>('cards/pack')
    },
    createPacks(packTitle: string){
        return instance.post('cards/pack', {packTitle: 'My first pack'})
    },
}

// types
type UpdateUserType = {
    updatedUser: ResponseType,
    token: string,
    tokenDeathTime: number,
}
export type ResponseType = UserType & {
    created: string,
    deviceTokens?: DeviceTokenType [],
    isAdmin: boolean,
    rememberMe: boolean,
    token: string,
    tokenDeathTime: number,
    updated: string,
    verified: boolean,
    __v: number,
    error?: string,
}
type DeviceTokenType = {
    _id: string,
    device: string,
}

export type UserType = {
    _id: string,
    email: string,
    name: string,
    avatar: string,
    publicCardPacksCount: number,
}
export type InfoResponseType = {
    info: string,
    error?: string
}

export type ForgotRequestType = {
    email: string
    from: string
    message: string
}
export type CardsPackType = {
    _id: string
    user_id: string
    user_name: string
    name: string
    path: string
    cardsCount: number
    grade: number
    shots: number
    rating: number
    type: string
    created: string
    updated: string
    __v: number
}
export type getPackResponseType = {
    cardPacks: CardsPackType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}