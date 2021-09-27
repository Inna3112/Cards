import {Dispatch} from 'redux';
import {CardsPackType, packsAPI} from '../m3-dal/api';
import {AppRootStateType} from './store';

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
        updated: ''
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
        case "SET-MY-PACKS": {
            return {
                ...state,
                cardsPacks: state.cardsPacks.filter(pack => pack.user_id === action.userId)
            }
        }

        default:
            return state
    }
}
// AC
export const setPacks = (packs: CardsPackType[]) => ({type: 'SET-PACKS', packs}) as const
export const setMyPacks = (userId: string) => ({type: 'SET-MY-PACKS', userId}) as const

// thunks
export const setPacksSuccess = () => async (dispatch: Dispatch, getState: () => AppRootStateType) => {
    const state = getState()
    const user_id = state.profile.userProfile._id
    const res = await packsAPI.getPacks()
    dispatch(setPacks(res.data.cardPacks))
    // dispatch(setMyPacks(user_id))
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
        await packsAPI.createPack(pack)
        dispatch(setPacksSuccess())
    }catch (err){
        console.log(err)
    }
}
export const deletePack = (packId: string) => async (dispatch: any) => {
    await packsAPI.deletePack(packId)
    dispatch(setPacksSuccess())
}


// types
type ActionsType = ReturnType<typeof setPacks>
| ReturnType<typeof setMyPacks>


