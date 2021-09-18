import React, {ChangeEvent, MouseEventHandler, useState} from 'react'
import {SuperInputText} from '../../../../../common/c1-SuperInputText/SuperInputText';
import {SuperButton} from '../../../../../common/c2-SuperButton/SuperButton';
import s from './Register.module.css'


export const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.value === confirm){
            setPassword(e.currentTarget.value)
        } else {
            //dispatch error
        }

    }
    const confirmHandler = (e: ChangeEvent<HTMLInputElement>) => setConfirm(e.currentTarget.value)
    const registerHandler = (e: MouseEventHandler<HTMLButtonElement>) => {
        //dispatch
    }

    return (
        <div className={s.register}>
            <h1>Register</h1>
            <SuperInputText placeholder={'Email'} value={email} onChange={emailHandler}/>
            <SuperInputText placeholder={'Password'} value={password} onChange={passwordHandler}/>
            <SuperInputText placeholder={'Confirm password'} value={confirm} onChange={confirmHandler}/>
            <SuperButton>Cancel</SuperButton>
            <SuperButton>Register</SuperButton>
        </div>
    )
}


