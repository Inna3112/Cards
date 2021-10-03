import React, {ChangeEvent, useState} from 'react'
import s from './SetPassword.module.css'
import {Redirect, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../n1-main/m2-bll/store';
import {setNewPasswordSuccess} from '../../../n1-main/m2-bll/passwordRecover-reducer';
import {SuperInputText} from '../../../common/c1-SuperInputText/SuperInputText';
import {SuperButton} from '../../../common/c2-SuperButton/SuperButton';


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
                <div className={s.setPasswordInput}>
                    <SuperInputText placeholder={'password'} value={password} onChange={passwordHandler} />
                </div>

                <SuperButton className={s.setPasswordBtn} color={"blue"} onClick={setNewPassword}>Create new password</SuperButton>
            </div>
        </div>
    )
}
