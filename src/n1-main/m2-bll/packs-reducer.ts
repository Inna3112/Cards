import {Dispatch} from 'redux';
import {CardsPackType, packsAPI, SortType} from '../m3-dal/api';
import {setProfileSuccess} from './auth-reducer';
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
    maxCardsCount: 6,
    minCardsCount: 0,
    page: 1,
    pageCount: 10,
    user_id: '',
    packName: '',
    sortPacks: '0updated' as SortType,
    packNameForLearn: ''
}


export const packsReducer = (state = initialState, action: ActionsType): typeof initialState => {
    switch (action.type) {
        case "SET-PACKS": {
            return {
                ...state,
                cardsPacks: action.packs.map(p => ({...p}))
            }
        }
        case "SET-USER-ID": {
            return {
                ...state,
                user_id: action.userId
            }
        }
        case "SET-PAGE": {
            return {
                ...state,
                page: action.curPage
            }
        }
        case "SET-CARDS-PACKS-TOTAL-COUNT": {
            return {
                ...state,
                cardPacksTotalCount: action.cardsPacksCount
            }
        }
        case "SET-PACK-NAME":{
            return {
                ...state,
                packName: action.packName
            }
        }
        case "SET-PACK-NAME-FOR-LEARN":{
            const copyState = {...state}
            const pack = copyState.cardsPacks.find(pack => pack._id === action.packId)
            return {
                ...state,
                //@ts-ignore
                packNameForLearn: pack?.name
            }
        }
        default:
            return state
    }
}
// AC
export const setPacks = (packs: CardsPackType[]) => ({type: 'SET-PACKS', packs}) as const
export const setUserId = (userId: string) => ({type: 'SET-USER-ID', userId}) as const
export const setPage = (curPage: number) => ({type: 'SET-PAGE', curPage}) as const
export const setCardsPacksTotalCount = (cardsPacksCount: number) => ({type: 'SET-CARDS-PACKS-TOTAL-COUNT', cardsPacksCount}) as const
export const setPackName = (packName: string) => ({type: 'SET-PACK-NAME', packName}) as const
export const setPackNameForLearn = (packId: string) => ({type: 'SET-PACK-NAME-FOR-LEARN', packId}) as const

// thunks
export const setPacksSuccess = () => async (dispatch: Dispatch, getState: () => AppRootStateType) => {
    const state = getState()
    const packName = state.packs.packName
    const min = state.packs.minCardsCount
    const max = state.packs.maxCardsCount
    const sortPacks = state.packs.sortPacks
    const page = state.packs.page
    const pageCount = state.packs.pageCount
    const user_id = state.packs.user_id

    const res = await packsAPI.getPacks(packName, min, max, sortPacks,
        page, pageCount, user_id)
    dispatch(setPacks(res.data.cardPacks))
    dispatch(setCardsPacksTotalCount(res.data.cardPacksTotalCount))
}
export const addPacksSuccess = (packName: string) => async (dispatch: any) => {
    const pack = {
        name: packName,
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
        dispatch(setProfileSuccess())
    } catch (err) {
        console.log(err)
    }
}
export const deletePack = (packId: string) => async (dispatch: any) => {
    await packsAPI.deletePack(packId)
    dispatch(setPacksSuccess())
    dispatch(setProfileSuccess())
}
export const updatePack = (packId: string, name: string) => async (dispatch: any) => {
    await packsAPI.updatePack(packId, name)
    dispatch(setPacksSuccess())
}

// types
type ActionsType = ReturnType<typeof setPacks>
    | ReturnType<typeof setUserId>
    | ReturnType<typeof setPage>
    | ReturnType<typeof setCardsPacksTotalCount>
    | ReturnType<typeof setPackName>
    | ReturnType<typeof setPackNameForLearn>


