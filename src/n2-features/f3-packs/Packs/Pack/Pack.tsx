import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../n1-main/m2-bll/store';
import { UserType} from '../../../../n1-main/m3-dal/api';
import {NavLink} from 'react-router-dom';
import s from '../Packs.module.css';
import {deletePack} from '../../../../n1-main/m2-bll/packs-reducer';

type PropsType = {
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
export const Pack: React.FC<PropsType> = (props) => {
    let {
        _id,
        user_id,
        user_name,
        name,
        path,
        cardsCount,
        grade,
        shots,
        rating,
        type,
        created,
        updated
    } = props

    const dispatch = useDispatch()

    const user = useSelector<AppRootStateType, UserType | null>(state => state.auth.user)


    // const setCardsOfPack = () => dispatch(setCurdsSuccess(_id))

    const deleteHandler = () => {
        dispatch(deletePack(_id))
    }
    const updateHandler = () => {
        // dispatch(updatePackTC(props._id, packName))
    }

    return (

        <tr>
            <td>{name}</td>
            <td>{cardsCount}</td>
            <td>{new Date(updated).toLocaleDateString('ru', {day: '2-digit', month: '2-digit', year: 'numeric'})}</td>
            <td>{user_name}</td>
            <td>
                {user_id === user?._id &&
                <button className={s.btn} onClick={deleteHandler}>del</button>}
                {user_id === user?._id &&
                <button className={s.btn} onClick={updateHandler}>update</button>}
                <NavLink
                    to={`/cards/${_id}`}>
                    <button className={s.btn}>learn</button>
                </NavLink>
            </td>
        </tr>

    )
}
