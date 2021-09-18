import React, {ChangeEvent, useState} from 'react'
import {SuperInputText} from '../../../../common/c1-SuperInputText/SuperInputText';
import {SuperButton} from '../../../../common/c2-SuperButton/SuperButton';


export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)

    return (
        <div>
            <h1>Login</h1>
            <SuperInputText placeholder={'Email'} value={email} onChange={emailHandler}/>
            <SuperInputText placeholder={'Password'} value={password} onChange={passwordHandler}/>
            <SuperButton>Login</SuperButton>
        </div>
    )
}
