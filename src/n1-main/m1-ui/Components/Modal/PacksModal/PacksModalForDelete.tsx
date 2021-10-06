import React from 'react';
import {SuperButton} from '../../../../../common/c2-SuperButton/SuperButton';
import s from './../Modal.module.css'

type PropsType = {
    deletePack: () => void
    closePackModal: () => void
}
export const PacksModalForDelete: React.FC<PropsType> = ({deletePack, closePackModal}) => {

    const deletePackHandler = () => {
        deletePack()
        closePackModal()
    }
    return (
        <div className={s.wrapperModal}>
            <div className={s.modal}>
                <h3>Are you sure that you want to delete the pack?</h3>
                <div className={s.buttonBlock}>
                    <SuperButton onClick={() => closePackModal()} color={'blue'}>Cancel</SuperButton>
                    <SuperButton onClick={deletePackHandler} color={'red'}>Ok</SuperButton>
                </div>
            </div>
        </div>
    )
}