import React from 'react'
import s from "../Cards.module.css";

type PropsType = {
    question: string
    answer: string
    grade: number
    updated: string
    packId: string
}
export const Card: React.FC<PropsType> = (props) => {
    let {
        question,
        answer,
        grade,
        updated,
        packId,
    } = props


    return (

        <tr>
            <td>{question}</td>
            <td>{answer}</td>
            <td>{grade}</td>
            <td>{updated}</td>
            <td>
                <button className={s.btn}>del</button>
                <button className={s.btn}>update</button>
            </td>
        </tr>

    )
}
