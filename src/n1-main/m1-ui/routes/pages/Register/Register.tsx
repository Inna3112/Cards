import React, {ChangeEvent, useState} from 'react'
import {SuperInputText} from '../../../../../common/c1-SuperInputText/SuperInputText';
import {SuperButton} from '../../../../../common/c2-SuperButton/SuperButton';
import s from './Register.module.css'
import {useDispatch} from 'react-redux';
import {registerSuccess} from "../../../../m2-bll/registration-reducer";


export const Register = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)
    const confirmHandler = (e: ChangeEvent<HTMLInputElement>) => setConfirm(e.currentTarget.value)
    const registerHandler = () => {
        if(password === confirm){
            dispatch(registerSuccess(email, password))
        }else {
            //error
            alert('Password must be eaquel confirm')
        }

    }

    return (
        <div className={s.register}>
            <h1>Register</h1>
            <SuperInputText placeholder={'Email'} value={email} onChange={emailHandler}/>
            <SuperInputText placeholder={'Password'} value={password} onChange={passwordHandler}/>
            <SuperInputText placeholder={'Confirm password'} value={confirm} onChange={confirmHandler}/>
            <SuperButton>Cancel</SuperButton>
            <SuperButton onClick={registerHandler}>Register</SuperButton>
        </div>
    )
}


