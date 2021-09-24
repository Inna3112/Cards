import {Dispatch} from 'redux';
import {CardsPackType, packsAPI} from '../m3-dal/api';

const initialState = {
    cardsPacks: [{
        _id: '',
        user_id: '',
        user_name: '',
        name: '',
        path: '',
        cardsCount: 0,
        grade: 0,
        shots: 0,
        rating: 0,
        type: '',
        created: '',
        updated: '',
        __v: 0
    }],
    cardPacksTotalCount: 0,
    maxCardsCount: 1,
    minCardsCount: 0,
    page: 1,
    pageCount: 0
}


export const packsReducer = (state = initialState, action: ActionsType): typeof initialState => {
    switch (action.type) {
        case "SET-PACKS": {
            return {
                ...state,
                cardsPacks: action.packs.map(p => ({...p}))
            }
        }
        default:
            return state
    }
}
// AC
export const setPacks = (packs: CardsPackType[]) => ({type: 'SET-PACKS', packs}) as const

// thunks
export const setPacksSuccess = () => async (dispatch: Dispatch) => {
    const res = await packsAPI.getPacks()
    dispatch(setPacks(res.data.cardPacks))
}
export const addPacksSuccess = () => async (dispatch: any) => {
    const pack = {
        name: 'My first pack',
        path: '',
        grade: 0,
        shots: 0,
        rating: 0,
        deckCover: '',
        private: false,
        type: ''
    }
    try {
        await packsAPI.createPacks(pack)
        dispatch(setPacksSuccess())
    }catch (err){
        console.log(err)
    }
}

// types
type ActionsType = ReturnType<typeof setPacks>

