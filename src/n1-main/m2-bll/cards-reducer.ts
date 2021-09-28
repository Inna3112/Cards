import {Dispatch} from 'redux';
import {CardRequestType, cardsAPI, GetCardsResponseType} from '../m3-dal/api';


const initialState = {
    cards: [{
        cardsPack_id: '',
        question: '',
        answer: '',
        grade: 0,
        shots: 0,
        user_id: '',
        updated: '',
        _id: ''
    }],
    cardsTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    page: 0,
    pageCount: 0,
    packUserId: ''

}

export const cardsReducer = (state = initialState, action: ActionsType): typeof initialState=> {
    switch (action.type) {
        case "SET-CARDS": {
            return {
                ...state,
                cards: action.cardsData.cards.map(card => ({...card}))
            }
        }
        default:
            return state
    }
}
// AC
export const setCards = (cardsData: GetCardsResponseType ) => ({type: 'SET-CARDS', cardsData}) as const


// thunks
export const setCurdsSuccess = (packId: string) => async (dispatch: Dispatch) => {
    const res = await cardsAPI.getCards(packId)
    dispatch(setCards(res.data))
}
export const createCurdSuccess = (card: CardRequestType) => async (dispatch: Dispatch) => {
    await cardsAPI.createCard(card)
}
export const deleteCurdSuccess = (cardPackId: string, cardId: string) => async (dispatch: Dispatch) => {
    await cardsAPI.deleteCard(cardId)
}

// types
type ActionsType = ReturnType<typeof setCards>

