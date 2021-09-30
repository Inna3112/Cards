import React, {ChangeEvent, useState} from 'react'
import s from './Login.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, Redirect} from 'react-router-dom';
import {AppRootStateType} from '../../../n1-main/m2-bll/store';
import {loginSuccess} from '../../../n1-main/m2-bll/login-reducer';
import {SuperInputText} from '../../../common/c1-SuperInputText/SuperInputText';
import {SuperCheckbox} from '../../../common/c3-SuperCheckbox/SuperCheckbox';
import {PATH} from '../../../n1-main/m1-ui/routes/Routes';
import {SuperButton} from '../../../common/c2-SuperButton/SuperButton';


export const Login = () => {

    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const errorFromStore = useSelector<AppRootStateType, string>(state => state.login.error)
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.login.isLoading)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const [error, setError] = useState('')

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)
    const rememberMeHandler = () => setRememberMe(!rememberMe)
    const loginHandler = () => {
        if(email !== '' && password !== '') {
            dispatch(loginSuccess({email, password, rememberMe}))
        } else {
            setError('Field is required!')
        }
    }
    const inputOnClickHandler = () => {
        setError('')
    }
    if(isLoggedIn){
        return <Redirect to={'/profile'} />
    }

    return (
        <div className={s.loginBlock}>
            <div className={s.loginList}>
                <h1 className={s.loginTitle}>Login</h1>
                {isLoading ? <div style={{color: 'green'}}>Loading...</div> : ''}
                <SuperInputText className={s.loginInput} placeholder={'Email'}
                                error={error} value={email} onChange={emailHandler}
                                onClick={inputOnClickHandler}/>
                <SuperInputText className={s.loginInput} placeholder={'Password'}
                                error={error} value={password} onChange={passwordHandler}
                                onClick={inputOnClickHandler}/>
                <div className={s.rememberBlock}>
                    <SuperCheckbox checked={rememberMe} onClick={rememberMeHandler}>Remember me</SuperCheckbox>
                    <NavLink to={PATH.FORGOT} className={s.forgotLink} activeClassName={s.forgotLincActive}>Forgot password</NavLink>
                </div>
                <SuperButton style={{width: '266px'}} color={"blue"} className={s.loginButton} onClick={loginHandler}>Login</SuperButton>
                <div className={s.loginText}>Don't have an account?</div>
                <NavLink to={PATH.REGISTER} className={s.signUpLink} activeClassName={s.signUpLinkActive}>Sign Up</NavLink>
                {errorFromStore ? <div style={{color: 'red'}}>{errorFromStore}</div> : ''}
            </div>
        </div>
    )
}
