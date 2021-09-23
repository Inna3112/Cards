import React from 'react'
import s from './Cards.module.css'
import {useDispatch} from 'react-redux';
import {Card} from "./Card/Card";


export const Cards = () => {
    const dispatch = useDispatch()
    const card = {question: 'u', answer: 'i', grade: 0, updated: 'sds', url: '/lll/ll'}
    const cards = [card]

    // useEffect(() => {
    //     dispatch(setPacksSuccess())
    // }, [])
    const click = () => {

    }


    return (
        <div className={s.container}>
            <h2>Cards list</h2>
            <table className={s.tableBox}>
                <thead>
                <tr>
                    <th>
                        question
                    </th>
                    <th>
                        answer
                    </th>
                    <th>
                        grade
                    </th>
                    <th>
                        updated
                    </th>
                    <th>url</th>
                    <th>
                        <button>del</button>
                    </th>
                </tr>
                </thead>
                <tbody>
                {cards && cards.map(card => {
                    return (
                        <Card
                            question={card.question}
                            answer={card.answer}
                            grade={card.grade}
                            updated={card.updated}
                            url={card.url}
                        />
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}


