import React from 'react'
import s from './Cards.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {Card} from './Card/Card';
import {AppRootStateType} from '../../../n1-main/m2-bll/store';
import {createCurdSuccess, setCurdsSuccess} from '../../../n1-main/m2-bll/cards-reducer';
import {useParams, useLocation} from 'react-router-dom';
import {SearchBlock} from '../../../common/SearchBlock/SearchBlock';
import {CardType} from '../../../n1-main/m3-dal/api';


export const Cards = () => {
    const dispatch = useDispatch()
    const cards = useSelector<AppRootStateType, CardType[]>(state => state.cards.cards)
    const { cardsPackId } = useParams<{cardsPackId: string}>();
    let location = useLocation()

    console.log(cardsPackId)
    console.log(location)

    const addCard = () => {
        dispatch(createCurdSuccess({
            cardsPack_id: cardsPackId,
            question: 'How?',
            answer: ';)'
        }))
        dispatch(setCurdsSuccess(cardsPackId))
    }


    return (
        <div className={s.container}>
            <h2>Cards list</h2>
            <SearchBlock placeholder={'Search question'} btnName={'Search'} />
            <SearchBlock placeholder={'Search answer'} btnName={'Search'}/>
            <div className={s.tableBox}>
                <table className={s.table}>
                    <thead>
                    <tr className={s.listItem}>
                        <th>question</th>
                        <th>answer</th>
                        <th>grade</th>
                        <th>updated</th>
                        <th><button className={s.btn} onClick={addCard}>add</button></th>
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
                                packId={card.cardsPack_id}
                                packUserId={card.user_id}
                                _id={card._id}
                            />
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


