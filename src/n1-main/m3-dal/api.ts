import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export type LoginResponseType = {
    avatar: string,
    created: string,
    deviceTokens: DeviceTokenType [],
    email: string,
    isAdmin: boolean,
    name: string,
    publicCardPacksCount: number,
    rememberMe: boolean,
    token: string,
    tokenDeathTime: number,
    updated: string,
    verified: boolean,
    __v: number,
    _id: string,
}
type DeviceTokenType = {
    _id: string,
    device: string,
}

export const authAPI = {
    register(email: string, password: string) {
        return instance.post<LoginResponseType>('auth/register', {email, password})
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<LoginResponseType>('auth/login', {email, password, rememberMe})
    }
}