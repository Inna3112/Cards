import React, {ChangeEvent, useState} from 'react'
import s from './Register.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {Redirect, useHistory} from 'react-router-dom';
import {AppRootStateType} from '../../../n1-main/m2-bll/store';
import {registerSuccess} from '../../../n1-main/m2-bll/registration-reducer';
import {SuperInputText} from '../../../common/c1-SuperInputText/SuperInputText';
import {SuperButton} from '../../../common/c2-SuperButton/SuperButton';


export const Register = () => {
    const dispatch = useDispatch()
    const isRegistered = useSelector<AppRootStateType, boolean>(state => state.registration.isRegistered)
    const history = useHistory()

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
    const cancelHandler = () => {
        history.goBack()
        // history.push('/login')
    }
    if(isRegistered){
        return <Redirect to={'/login'} />
    }
    return (
        <div className={s.registerBlock}>
            <div className={s.registerList}>
                <h1 className={s.registerTitle}>Sign Up</h1>
                <SuperInputText className={s.registerInput} placeholder={'Email'} value={email} onChange={emailHandler}/>
                <SuperInputText className={s.registerInput} placeholder={'Password'} value={password} onChange={passwordHandler}/>
                <SuperInputText className={s.registerInput} placeholder={'Confirm password'} value={confirm} onChange={confirmHandler}/>
                <div className={s.registerBtnBlock}>
                    <SuperButton className={s.cancelBtn} onClick={cancelHandler}>Cancel</SuperButton>
                    <SuperButton className={s.signUpBtn} onClick={registerHandler}>Sign Up</SuperButton>
                </div>
            </div>
        </div>
    )
}


