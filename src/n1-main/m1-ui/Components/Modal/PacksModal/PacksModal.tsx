import React, {ChangeEvent, useState} from 'react';
import {SuperInputText} from '../../../../../common/c1-SuperInputText/SuperInputText';
import {SuperButton} from '../../../../../common/c2-SuperButton/SuperButton';
import s from './../Modal.module.css'

type PropsType = {
    addPack: (packName: string) => void
}
export const PacksModal: React.FC<PropsType> = ({addPack}) => {

    const [title, setTitle] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const addPackHandler = () => {
        addPack(title)
    }
    return (
        <div className={s.wrapperModal}>
            <div className={s.modal}>
                <h3>Enter packs title!</h3>
                <div className={s.buttonBlock}>
                    <SuperInputText value={title} onChange={onChangeHandler}/>
                    <SuperButton color={'red'}>Cancel</SuperButton>
                    <SuperButton onClick={addPackHandler} color={'blue'}>Ok</SuperButton>
                </div>
            </div>
        </div>
    )
}