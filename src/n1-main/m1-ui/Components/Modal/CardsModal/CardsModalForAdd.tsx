import React, {ChangeEvent, useState} from 'react';
import {SuperInputText} from '../../../../../common/c1-SuperInputText/SuperInputText';
import {SuperButton} from '../../../../../common/c2-SuperButton/SuperButton';
import s from './../Modal.module.css'

type PropsType = {
    addCard: (question: string, answer: string) => void
    closeCardModal: () => void
}
export const CardsModalForAdd: React.FC<PropsType> = ({addCard, closeCardModal}) => {

    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const onChangeQuestionHandler = (e: ChangeEvent<HTMLInputElement>) => setQuestion(e.currentTarget.value)
    const onChangeAnswerHandler = (e: ChangeEvent<HTMLInputElement>) => setAnswer(e.currentTarget.value)

    const addCardHandler = () => {
        addCard(question, answer)
        closeCardModal()
    }
    return (
        <div className={s.wrapperModal}>
            <div className={s.modal}>
                <h3>Enter question and answer of card!</h3>
                <div className={s.buttonBlock}>
                    <SuperInputText placeholder={'question'} value={question} onChange={onChangeQuestionHandler}/>
                    <SuperInputText placeholder={'answer'} value={answer} onChange={onChangeAnswerHandler}/>
                    <SuperButton onClick={() => closeCardModal()} color={'red'}>Cancel</SuperButton>
                    <SuperButton onClick={addCardHandler} color={'blue'}>Add card</SuperButton>
                </div>
            </div>
        </div>
    )
}