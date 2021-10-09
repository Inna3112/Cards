import React, {useEffect, useState} from 'react'
import {Redirect, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import s from './Learn.module.css'
import {CardType} from '../../n1-main/m3-dal/api';
import {AppRootStateType} from '../../n1-main/m2-bll/store';
import {setCurdsSuccess, updateCardGradeSuccess} from '../../n1-main/m2-bll/cards-reducer';
import {SuperButton} from '../../common/c2-SuperButton/SuperButton';
import {SuperCheckbox} from "../../common/c3-SuperCheckbox/SuperCheckbox";
import {PATH} from "../../n1-main/m1-ui/routes/Routes";


const grades = ['не знал', 'забыл', 'долго думал', 'перепутал', 'знал'];

const getCard = (cards: CardType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    console.log('test: ', sum, rand, res)

    return cards[res.id + 1];
}


export const Learn = () => {
    const dispatch = useDispatch()
    const {isLoggedIn} = useSelector((state: AppRootStateType) => state.auth)
    const cards = useSelector<AppRootStateType, CardType[]>(state => state.cards.cards)
    const {cardsPackId} = useParams<{ cardsPackId: string }>();
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [first, setFirst] = useState<boolean>(true);
    const [card, setCard] = useState<CardType>({
        answer: 'answer fake',
        question: 'question fake',
        cardsPack_id: '',
        grade: 1,
        shots: 0,
        user_id: '',
        updated: '',
        _id: 'fake'
    })


    useEffect(() => {
        console.log('LearnContainer useEffect');

        if (first) {
            dispatch(setCurdsSuccess(cardsPackId));
            setFirst(false);
        }

        console.log('cards', cards)
        if (cards.length > 0) setCard(getCard(cards));

        return () => {
            console.log('LearnContainer useEffect off');
        }
    }, [dispatch, cardsPackId, cards, first]);

    const onNext = () => {
        setIsChecked(false);
        if (cards.length > 0) {
            setCard(getCard(cards));
        }
    }
    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>
    }
    return (
        <div className={s.learnBlock}>
            <div className={s.learnList}>
                <h2>Learn </h2>
                <div className={s.question}>Question: {card.question} </div>
                <div>
                    {!isChecked && <SuperButton color={'blue'} onClick={() => setIsChecked(true)}>Show answer</SuperButton>}
                </div>

                {isChecked && (
                    <>
                        <div className={s.answer}> Answer: {card.answer}</div>
                        <span>Rate yourself:</span>
                        <div className={s.rateBlock}>
                            {grades.map((g, i) => {
                                const onGrade = () => {
                                    dispatch(updateCardGradeSuccess(i, card._id))
                                    onNext()
                                }
                                return <SuperCheckbox key={'grade-' + i}
                                                      onClick={onGrade}>{g}</SuperCheckbox>
                            })}
                        </div>
                        <div><SuperButton color={'blue'} onClick={onNext}>next</SuperButton></div>
                    </>
                )}
            </div>

        </div>
    )
}


