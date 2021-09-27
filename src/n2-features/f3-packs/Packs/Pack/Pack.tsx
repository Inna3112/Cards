import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../n1-main/m2-bll/store';
import { UserType} from '../../../../n1-main/m3-dal/api';
import {setCurdsSuccess} from '../../../../n1-main/m2-bll/cards-reducer';
import {NavLink, useHistory} from 'react-router-dom';
import s from "../Packs.module.css";

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
    __v: number
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
        updated,
        __v
    } = props

    const dispatch = useDispatch()
    const history = useHistory()

    const user = useSelector<AppRootStateType, UserType | null>(state => state.profile.userProfile)

    const [packName, setPackName] = useState('')
    const deleteHandler = () => {
        // dispatch(deletePackTC(props._id))
    }
    const updateHandler = () => {
        // dispatch(updatePackTC(props._id, packName))
    }
    const changeHandler = (name: string) => {
        setPackName(name)
    }

    const onClickQuestionHandle = () => {

    }
    // const openCardsTable = () => {
    //     dispatch(setCurdsSuccess(_id))
    //     history.push(`/cards/${_id}`)
    // }
    return (

        <tr onClick={(e) => {
            if (e.currentTarget === e.target) {
                onClickQuestionHandle()
            }
            e.stopPropagation()
        }
        }>
            <td>{name}</td>
            <td>{cardsCount}</td>
            {/*<td>{created}</td>*/}
            <td>{new Date(updated).toLocaleDateString('ru', {day: '2-digit', month: '2-digit', year: 'numeric'})}</td>
            <td>{user_name}</td>
            <td>
                {user_id === user?._id &&
                <button className={s.btn} onClick={deleteHandler}>del</button>}
                {user_id === user?._id &&
                <button className={s.btn} onClick={updateHandler}>update</button>}
                <NavLink
                    to={`/cards/${props._id}/${name}`}>
                    <button className={s.btn}>learn</button>
                </NavLink>
            </td>
        </tr>

    )
}
