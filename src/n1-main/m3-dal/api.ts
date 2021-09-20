import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})
type UpdateUserType = {
    updatedUser: ResponseType,
    token: string,
    tokenDeathTime: number,
}
export type ResponseType = UserType &{
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

export const authAPI = {
    register(email: string, password: string) {
        return instance.post<ResponseType>('auth/register', {email, password})
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<ResponseType>('auth/login', {email, password, rememberMe})
    },
    logout(){
        return instance.delete<{info: string}>('auth/me')
    },
    me(){
        return instance.post<ResponseType>('auth/me', {})
    },
    updateMe(name: string, avatar: string){
        return instance.put<UpdateUserType>('auth/me', {name, avatar})
    }
}