import React, {ChangeEvent, useState} from 'react'
import {SuperInputText} from '../../../../../common/c1-SuperInputText/SuperInputText';
import {SuperButton} from '../../../../../common/c2-SuperButton/SuperButton';
import s from './Register.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {registerSuccess} from '../../../../m2-bll/registration-reducer';
import {AppRootStateType} from '../../../../m2-bll/store';
import {Redirect} from 'react-router-dom';


export const Register = () => {
    const dispatch = useDispatch()
    const isRegistered = useSelector<AppRootStateType, boolean>(state => state.registration.isRegistered)

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

    if(isRegistered){
        return <Redirect to={'/login'} />
    }
    return (
        <div className={s.registerBlock}>
            <h1>Register</h1>
            <SuperInputText placeholder={'Email'} value={email} onChange={emailHandler}/>
            <SuperInputText placeholder={'Password'} value={password} onChange={passwordHandler}/>
            <SuperInputText placeholder={'Confirm password'} value={confirm} onChange={confirmHandler}/>
            <SuperButton>Cancel</SuperButton>
            <SuperButton onClick={registerHandler}>Register</SuperButton>
        </div>
    )
}


