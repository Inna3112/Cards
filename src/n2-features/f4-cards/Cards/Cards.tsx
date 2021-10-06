import React, {useEffect, useState} from 'react'
import s from './Cards.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {Card} from './Card/Card';
import {AppRootStateType} from '../../../n1-main/m2-bll/store';
import {
    createCurd,
    setCardsAnswer,
    setCardsQuestion,
    setCurdsSuccess
} from '../../../n1-main/m2-bll/cards-reducer';
import {Redirect, useParams} from 'react-router-dom';
import {CardType} from '../../../n1-main/m3-dal/api';
import {SearchCardsBlock} from '../../../common/SearchBlock/SearchCardsBlock';
import {PATH} from '../../../n1-main/m1-ui/routes/Routes';
import {CardsModalForAdd} from '../../../n1-main/m1-ui/Components/Modal/CardsModal/CardsModalForAdd';


export const Cards = () => {
    const dispatch = useDispatch()
    const cards = useSelector<AppRootStateType, CardType[]>(state => state.cards.cards)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const { cardsPackId } = useParams<{cardsPackId: string}>();


    useEffect(() => {
        dispatch(setCurdsSuccess(cardsPackId))
    }, [dispatch, cardsPackId])
    console.log(cardsPackId)


    const addCard = (question: string, answer: string) => {
        dispatch(createCurd({
            cardsPack_id: cardsPackId,
            question,
            answer
        }))
    }

    //modal
    const [isCardModal, setIsCardModal] = useState(false)
    const openCardModal = () => setIsCardModal(true)
    const closeCardModal = () => setIsCardModal(false)

    if(!isLoggedIn){
        return <Redirect to={PATH.LOGIN} />
    }
    return (
        <div className={s.container}>
            <h2>Cards list</h2>
            <SearchCardsBlock placeholder={'Search question'} btnName={'Search'} setNameItem={setCardsQuestion} />
            <SearchCardsBlock placeholder={'Search answer'} btnName={'Search'} setNameItem={setCardsAnswer}/>
            <div className={s.tableBox}>
                <table className={s.table}>
                    <thead>
                    <tr className={s.listItem}>
                        <th>question</th>
                        <th>answer</th>
                        <th>grade</th>
                        <th>updated</th>
                        <th><button className={s.btn} onClick={openCardModal}>add</button></th>
                    </tr>
                    </thead>
                    <tbody>
                    {cards && cards.map(card => {
                        return (
                            <Card
                                key={card._id}
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
            <div>{isCardModal && <CardsModalForAdd addCard={addCard}
                                                   closeCardModal={closeCardModal}
            />}</div>
        </div>
    )
}


