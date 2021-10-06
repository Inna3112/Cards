import React, {ChangeEvent, useState} from 'react';
import {SuperInputText} from '../../../../../common/c1-SuperInputText/SuperInputText';
import {SuperButton} from '../../../../../common/c2-SuperButton/SuperButton';
import s from './../Modal.module.css'

type PropsType = {
    updatePackName: (newPackName: string) => void
    closePackModal: () => void
}
export const PacksModalForUpdate: React.FC<PropsType> = ({updatePackName, closePackModal}) => {

    const [newTitle, setNewTitle] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setNewTitle(e.currentTarget.value)
    const updatePackHandler = () => {
        updatePackName(newTitle)
        closePackModal()
    }
    return (
        <div className={s.wrapperModal}>
            <div className={s.modal}>
                <h3>Enter new packs title!</h3>
                <div className={s.buttonBlock}>
                    <SuperInputText value={newTitle} onChange={onChangeHandler}/>
                    <SuperButton onClick={() => closePackModal()} color={'red'}>Cancel</SuperButton>
                    <SuperButton onClick={updatePackHandler} color={'blue'}>Ok</SuperButton>
                </div>
            </div>
        </div>
    )
}