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
    getPacks(packName?: string, min?: number, max?: number, sortPacks?: SortPacksType,
             page?: number, pageCount?: number, user_id?: string) {
        return instance.get<getPackResponseType>('cards/pack', {
            params: {
                packName, min, max,
                sortPacks,
                page,
                pageCount,
                user_id
            }
        })
    },
    createPack(pack: PackType) {
        return instance.post('cards/pack', {cardsPack: pack})
    },
    deletePack(id: string) {
        return instance.delete('cards/pack', {params: {id}})
    }
}
// `users?page=${currentPage}&count=${pageSize}`
export const cardsAPI = {
    getCards(packId: string) {
        return instance.get<GetCardsResponseType>(`cards/card?cardsPack_id=${packId}`)
    },
    createCard(card: CardRequestType) {
        return instance.post('cards/card', {card: card})
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
}
export type getPackResponseType = {
    cardPacks: CardsPackType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    // user_id: string
}
type PackType = {
    name?: string
    path?: string
    grade?: number
    shots?: number
    rating?: number
    deckCover?: string
    private?: boolean
    type?: string
}
export type SortPacksType = '0updated' | '1updated'
export type CardType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    user_id: string
    created: string
    updated: string
    _id: string
}
type GetCardsResponseType = {
    cards: CardType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}
export type CardRequestType = {
    cardsPack_id: string
    question?: string
    answer?: string
    grade?: number
    shots?: number
    rating?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
    type?: string
}
