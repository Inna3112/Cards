import {Dispatch} from 'redux';
import {CardRequestType, cardsAPI, GetCardsResponseType, learnAPI, SortType} from '../m3-dal/api';
import {AppRootStateType} from './store';


const initialState = {
    cards: [{
        cardsPack_id: '',
        question: '',
        answer: '',
        grade: 1,
        shots: 0,
        user_id: '',
        updated: '',
        _id: ''
    }],
    cardsTotalCount: 0,
    maxGrade: 6,
    minGrade: 0,
    page: 1,
    pageCount: 5,
    packUserId: '',
    sortCards: '0updated' as SortType
}

export const cardsReducer = (state = initialState, action: ActionsType): typeof initialState => {
    switch (action.type) {
        case "SET-CARDS": {
            return {
                ...state,
                cards: action.cardsData.cards.map(card => ({...card}))
            }
        }
        case "SET-CARDS-ANSWER": {
            return {
                ...state,
                cards: state.cards.filter(card => card.answer === action.answer)
            }
        }
        case "SET-CARDS-QUESTION": {
            return {
                ...state,
                cards: state.cards.filter(card => card.question === action.question)
            }
        }
        case "UPDATE-CARD-GRADE":{
            return {
                ...state,
                cards: state.cards.map(c => c._id === action.cardId ? {...c, grade: action.grade} : c)
            }
        }
        default:
            return state
    }
}
// AC
export const setCards = (cardsData: GetCardsResponseType) => ({type: 'SET-CARDS', cardsData}) as const
export const setCardsAnswer = (answer: string) => ({type: 'SET-CARDS-ANSWER', answer}) as const
export const setCardsQuestion = (question: string) => ({type: 'SET-CARDS-QUESTION', question}) as const
export const updateCardGrade = (grade: number, cardId: string) => ({type: 'UPDATE-CARD-GRADE', grade, cardId}) as const

// thunks
export const setCurdsSuccess = (packId: string) => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    const state = getState()
    const min = state.cards.minGrade
    const max = state.cards.maxGrade
    const page = state.cards.page
    const pageCount = state.cards.pageCount
    const sortCards = state.cards.sortCards

    cardsAPI.getCards(packId, min, max, page, pageCount, sortCards)
        .then((res) => {
            dispatch(setCards(res.data))
        })
        .catch(err => {
            console.log(err)
        })
}
export const createCurd = (card: CardRequestType) => async (dispatch: any) => {
    await cardsAPI.createCard(card)
    dispatch(setCurdsSuccess(card.cardsPack_id))
}
export const deleteCurd = (cardPackId: string, cardId: string) => async (dispatch: any) => {
    await cardsAPI.deleteCard(cardId)
    dispatch(setCurdsSuccess(cardPackId))
}
export const updateCard = (cardId: string, cardPackId: string, newQuestion?: string, newAnswer?: string) => async (dispatch: any) => {
    await cardsAPI.updateCards(cardId, newQuestion, newAnswer)
    dispatch(setCurdsSuccess(cardPackId))
}
export const updateCardGradeSuccess = (grade: number, card_id: string) => async (dispatch: Dispatch) => {
    try{
        const res = await learnAPI.updateGrade(grade, card_id)
        dispatch(updateCardGrade(res.data.grade, res.data.card_id))
    }catch (error) {
        console.log(error)
    }
}


// types
// export type GradeType = 1 | 2 | 3 | 4 | 5
type ActionsType = ReturnType<typeof setCards>
    | ReturnType<typeof setCardsAnswer>
    | ReturnType<typeof setCardsQuestion>
    | ReturnType<typeof updateCardGrade>

