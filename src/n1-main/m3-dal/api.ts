import axios from 'axios';
import {GradeType} from '../m2-bll/cards-reducer';


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
    getPacks(packName?: string, min?: number, max?: number, sortPacks?: SortType,
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
    },
    updatePack(packId: string, newName?: string) {
        return instance.put('cards/pack', {cardsPack: {_id: packId, name: newName}})
    }
}
// `users?page=${currentPage}&count=${pageSize}`
export const cardsAPI = {
    getCards(cardsPack_id: string, min?: number, max?: number, page?: number, pageCount?: number, sortCards?: SortType) {
        return instance.get<GetCardsResponseType>('cards/card', {
            params: {
                cardsPack_id,
                min,
                max,
                page,
                pageCount,
                sortCards
            }
        })
    },
    createCard(card: CardRequestType) {
        return instance.post('cards/card', {card: card})
    },
    deleteCard(id: string) {
        return instance.delete('cards/card', {params: {id}})
    },
    updateCards(cardId: string, question?: string, answer?: string) {
        return instance.put('cards/card', {card: {_id: cardId, question, answer}})
    }
}
export const learnAPI = {
    updateGrade(grade: GradeType, card_id: string) {
        return instance.put<UpdatedGradeResponseType>('cards/grade', {grade, card_id})
    }
}

// types

type UpdatedGradeResponseType = {
    _id: string
    cardsPack_id: string
    card_id: string
    user_id: string
    grade: GradeType
    shots: number
}

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

    created: string,
    updated: string,
    isAdmin: boolean,
    verified: boolean,
    rememberMe: boolean
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
export type SortType = '0updated' | '1updated'
export type CardType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: GradeType
    // rating?: number
    shots: number
    // type?: string
    user_id: string
    updated: string
    _id: string

}
export type GetCardsResponseType = {
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
    // rating?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
    // type?: string
}
