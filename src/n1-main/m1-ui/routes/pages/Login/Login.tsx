import React, {ChangeEvent, useState} from 'react'
import {SuperInputText} from '../../../../../common/c1-SuperInputText/SuperInputText';
import {SuperButton} from '../../../../../common/c2-SuperButton/SuperButton';
import s from './Login.module.css'
import {SuperCheckbox} from '../../../../../common/c3-SuperCheckbox/SuperCheckbox';


export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)
    const rememberMeHandler = () => setRememberMe(!rememberMe)
    const loginHandler = () => {
        alert('email and password dispatch')
    }

    return (
        <div className={s.loginBlock}>
            <h1>Login</h1>
            <SuperInputText placeholder={'Email'} value={email} onChange={emailHandler}/>
            <SuperInputText placeholder={'Password'} value={password} onChange={passwordHandler}/>
            <SuperCheckbox checked={rememberMe} onClick={rememberMeHandler}>Remember me</SuperCheckbox>
            <SuperButton onClick={loginHandler}>Login</SuperButton>
        </div>
    )
}
