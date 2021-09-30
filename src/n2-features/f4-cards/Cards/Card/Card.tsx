import React from 'react'
import s from '../Cards.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../n1-main/m2-bll/store';
import {deleteCurdSuccess, setCurdsSuccess} from "../../../../n1-main/m2-bll/cards-reducer";

type PropsType = {
    question?: string
    answer?: string
    grade?: number
    updated?: string
    packId: string
    packUserId: string
    _id: string
}
export const Card: React.FC<PropsType> = (props) => {
    const dispatch = useDispatch()
    const user_id = useSelector<AppRootStateType, string>(state => state.auth.user._id)
    let {
        question,
        answer,
        grade,
        updated,
        packId,
        packUserId,
        _id
    } = props

    const deleteCardHandler = () => {
        dispatch(deleteCurdSuccess(packId, _id))
        dispatch(setCurdsSuccess(packId))
    }
    return (

        <tr>
            <td>{question}</td>
            <td>{answer}</td>
            <td>{grade}</td>
            <td>{updated}</td>
            <td>
                {user_id === packUserId &&
                <button className={s.btn} onClick={deleteCardHandler}>del</button>}
                {user_id === packUserId &&
                <button className={s.btn}>update</button>}
            </td>
        </tr>

    )
}
