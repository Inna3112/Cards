import React, {ChangeEvent, useState} from 'react'
import {SuperInputText} from '../../../../../common/c1-SuperInputText/SuperInputText';
import {SuperButton} from '../../../../../common/c2-SuperButton/SuperButton';
import s from './Login.module.css'
import {SuperCheckbox} from '../../../../../common/c3-SuperCheckbox/SuperCheckbox';
import {useDispatch, useSelector} from 'react-redux';
import {loginSuccess} from '../../../../m2-bll/login-reducer';
import {NavLink, Redirect} from 'react-router-dom';
import {AppRootStateType} from '../../../../m2-bll/store';
import {PATH} from '../../Routes';


export const Login = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const error = useSelector<AppRootStateType, string>(state => state.login.error)
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.login.isLoading)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)
    const rememberMeHandler = () => setRememberMe(!rememberMe)
    const loginHandler = () => {
        dispatch(loginSuccess({email, password, rememberMe}))
    }

    if(isLoggedIn){
        return <Redirect to={'/profile'} />
    }
    return (
        <div className={s.loginBlock}>
            <div className={s.loginList}>
                <h1 className={s.loginTitle}>Login</h1>
                {isLoading ? <div style={{color: 'green'}}>Loading...</div> : ''}
                <SuperInputText className={s.loginInput} placeholder={'Email'} value={email} onChange={emailHandler}/>
                <SuperInputText className={s.loginInput} placeholder={'Password'} value={password} onChange={passwordHandler}/>
                <div className={s.rememberBlock}>
                    <SuperCheckbox checked={rememberMe} onClick={rememberMeHandler}>Remember me</SuperCheckbox>
                    <NavLink to={PATH.FORGOT} className={s.forgotLink} activeClassName={s.forgotLincActive}>Forgot password</NavLink>
                </div>
                <SuperButton className={s.loginButton} onClick={loginHandler}>Login</SuperButton>
                <div className={s.loginText}>Don't have an account?</div>
                <NavLink to={PATH.REGISTER} className={s.signUpLink} activeClassName={s.signUpLinkActive}>Sign Up</NavLink>
                {error ? <div style={{color: 'red'}}>{error}</div> : ''}
            </div>
        </div>
    )
}
