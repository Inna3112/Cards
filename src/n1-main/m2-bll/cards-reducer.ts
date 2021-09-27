import {Dispatch} from 'redux';
import {CardRequestType, cardsAPI, CardType} from "../m3-dal/api";


const initialState = {
    cards: [{
        answer: '',
        question: '',
        cardsPack_id: '',
        grade: 0,
        rating: 0,
        shots: 0,
        type: '',
        user_id: '',
        created: '',
        updated: '',
        _id: '',
    }],
    cardsTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    page: 0,
    pageCount: 0,
    packUserId: ''

}

export const cardsReducer = (state = initialState, action: ActionsType): typeof initialState => {
    switch (action.type) {
        case "SET-CARDS": {
            return {
                ...state,
                cards: action.cards.map(card => ({...card}))
            }
        }
        default:
            return state
    }
}
// AC
export const setCards = (cards: CardType[]) => ({type: 'SET-CARDS', cards}) as const

// thunks
export const setCurdsSuccess = (packId: string) => async (dispatch: Dispatch) => {
    const res = await cardsAPI.getCards(packId)
    dispatch(setCards(res.data.cards))
}
export const createCurdSuccess = (card: CardRequestType) => async (dispatch: any) => {
    await cardsAPI.createCard(card)
    dispatch(setCurdsSuccess(card.cardsPack_id))
}

// types
type ActionsType = ReturnType<typeof setCards>
