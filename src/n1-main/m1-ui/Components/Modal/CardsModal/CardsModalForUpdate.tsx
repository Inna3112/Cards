import React, {ChangeEvent, useState} from 'react';
import {SuperInputText} from '../../../../../common/c1-SuperInputText/SuperInputText';
import {SuperButton} from '../../../../../common/c2-SuperButton/SuperButton';
import s from './../Modal.module.css'

type PropsType = {
    updateCard: (newQuestion?: string, newAnswer?: string) => void
    closeCardModal: () => void
    question?: string
    answer?: string
}
export const CardsModalForUpdate: React.FC<PropsType> = ({updateCard, closeCardModal, answer, question}) => {

    const [newQuestion, setNewQuestion] = useState(question)
    const [newAnswer, setNewAnswer] = useState(answer)
    const onChangeQuestionHandler = (e: ChangeEvent<HTMLInputElement>) => setNewQuestion(e.currentTarget.value)
    const onChangeAnswerHandler = (e: ChangeEvent<HTMLInputElement>) => setNewAnswer(e.currentTarget.value)

    const updatePackHandler = () => {
        updateCard(newQuestion, newAnswer)
        closeCardModal()
    }
    return (
        <div className={s.wrapperModal}>
            <div className={s.modal}>
                <h3>Enter new packs title!</h3>
                <div className={s.buttonBlock}>
                    <SuperInputText placeholder={'Question'} value={newQuestion} onChange={onChangeQuestionHandler}/>
                    <SuperInputText placeholder={'Answer'} value={newAnswer} onChange={onChangeAnswerHandler}/>
                    <SuperButton onClick={() => closeCardModal()} color={'red'}>Cancel</SuperButton>
                    <SuperButton onClick={updatePackHandler} color={'blue'}>Ok</SuperButton>
                </div>
            </div>
        </div>
    )
}