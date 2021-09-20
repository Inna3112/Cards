import React from 'react'
import s from './SetPassword.module.css'
import {SuperInputText} from '../../../../../common/c1-SuperInputText/SuperInputText';
import {SuperButton} from '../../../../../common/c2-SuperButton/SuperButton';
import { useParams } from 'react-router-dom';


export const SetPassword = () => {
    const {token} = useParams<{ token: string }>()
    return (
        <div className={s.setPasswordBlock}>
            <div className={s.setPasswordList}>
                <h1 className={s.setPasswordTitle}>Create new password</h1>
                <SuperInputText className={s.setPasswordInput} placeholder={'password'} />
                <SuperButton className={s.setPasswordBtn}>Create new password</SuperButton>
            </div>
        </div>
    )
}
