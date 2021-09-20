import React, {ChangeEvent, useState} from 'react'
import s from '../Login/Login.module.css';
import {SuperInputText} from '../../../../../common/c1-SuperInputText/SuperInputText';
import {NavLink, Redirect} from 'react-router-dom';
import {PATH} from '../../Routes';
import {SuperButton} from '../../../../../common/c2-SuperButton/SuperButton';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../m2-bll/store';
import {setEmailSuccess} from '../../../../m2-bll/passwordRecover-reducer';


export const Forgot = () => {
    const dispatch = useDispatch()
    const error = useSelector<AppRootStateType, string>(state => state.login.error)
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.login.isLoading)
    const isEmailSet = useSelector<AppRootStateType, boolean>(state => state.passwordRecover.isEmailSet)

    const [email, setEmail] = useState('')
    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
    const forgotHandler = () => dispatch(setEmailSuccess(email))

    if(isEmailSet){
        return <Redirect to={'/set-password'} />
    }

    return (
        <div className={s.forgotBlock}>
            <div className={s.loginList}>
                <h1 className={s.loginTitle}>Forgot your password?</h1>
                {isLoading ? <div style={{color: 'green'}}>Loading...</div> : ''}
                <SuperInputText className={s.forgotInput} placeholder={'Email'} value={email} onChange={emailHandler}/>
                <div className={s.forgotText}>Enter your email address and we will send you further instructions</div>
                <SuperButton className={s.forgotButton} onClick={forgotHandler}>Send Instructions</SuperButton>
                <div className={s.forgotText}>Did you remember your password?</div>
                <NavLink to={PATH.REGISTER} className={s.signUpLink} activeClassName={s.signUpLinkActive}>Try logging in</NavLink>
                {error ? <div style={{color: 'red'}}>{error}</div> : ''}
            </div>
        </div>
    )
}
