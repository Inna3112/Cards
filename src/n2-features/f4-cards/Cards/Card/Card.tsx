import React from 'react'
import s from '../Cards.module.css';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../n1-main/m2-bll/store';

type PropsType = {
    question: string
    answer: string
    grade: number
    updated: string
    packId: string
    packUserId: string
}
export const Card: React.FC<PropsType> = (props) => {
    const user_id = useSelector<AppRootStateType, string>(state => state.profile.userProfile._id)
    let {
        question,
        answer,
        grade,
        updated,
        packId,
        packUserId,
    } = props


    return (

        <tr>
            <td>{question}</td>
            <td>{answer}</td>
            <td>{grade}</td>
            <td>{updated}</td>
            <td>
                {user_id === packUserId &&
                <button className={s.btn}>del</button>}
                {user_id === packUserId &&
                <button className={s.btn}>update</button>}
            </td>
        </tr>

    )
}
