import React, {ChangeEvent, useState} from 'react'
import s from './SetPassword.module.css'
import {SuperInputText} from '../../../../../common/c1-SuperInputText/SuperInputText';
import {SuperButton} from '../../../../../common/c2-SuperButton/SuperButton';
import {Redirect, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {setNewPasswordSuccess} from '../../../../m2-bll/passwordRecover-reducer';
import {AppRootStateType} from '../../../../m2-bll/store';


export const SetPassword = () => {
    const {token} = useParams<{ token: string }>()
    console.log('token: ' + token)
    const dispatch = useDispatch()
    const isPasswordSet = useSelector<AppRootStateType, boolean>(state => state.passwordRecover.isPasswordSet)
    const [password, setPassword] = useState('')
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)
    const setNewPassword = () => {
        dispatch(setNewPasswordSuccess(password, token))
        setPassword('')
    }

    if(isPasswordSet){
        return <Redirect to={'/login'} />
    }
    return (
        <div className={s.setPasswordBlock}>
            <div className={s.setPasswordList}>
                <h1 className={s.setPasswordTitle}>Create new password</h1>
                <SuperInputText className={s.setPasswordInput} placeholder={'password'} value={password} onChange={passwordHandler} />
                <SuperButton className={s.setPasswordBtn} onClick={setNewPassword}>Create new password</SuperButton>
            </div>
        </div>
    )
}
