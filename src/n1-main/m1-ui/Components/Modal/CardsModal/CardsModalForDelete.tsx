import React from 'react';
import {SuperButton} from '../../../../../common/c2-SuperButton/SuperButton';
import s from './../Modal.module.css'

type PropsType = {
    deleteCard: () => void
    closeCardModal: () => void
}
export const CardsModalForDelete: React.FC<PropsType> = ({deleteCard, closeCardModal}) => {

    const deleteCardHandler = () => {
        deleteCard()
        closeCardModal()
    }
    return (
        <div className={s.wrapperModal}>
            <div className={s.modal}>
                <h3>Are you sure that you want to delete the pack?</h3>
                <div className={s.buttonBlock}>
                    <SuperButton onClick={() => closeCardModal()} color={'blue'}>Cancel</SuperButton>
                    <SuperButton onClick={deleteCardHandler} color={'red'}>Ok</SuperButton>
                </div>
            </div>
        </div>
    )
}