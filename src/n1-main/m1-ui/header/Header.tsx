import React from 'react'
import s from './Header.module.css'
import {NavLink, Redirect} from 'react-router-dom'
import {PATH} from '../routes/Routes';
import {SuperButton} from '../../../common/c2-SuperButton/SuperButton';
import {useDispatch, useSelector} from 'react-redux';
import {logoutSuccess} from '../../m2-bll/login-reducer';
import {AppRootStateType} from '../../m2-bll/store';


function Header() {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logoutSuccess())
    }
    if (!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }
    return (
        <div className={s.header}>
            <NavLink to={PATH.MAIN} className={s.link} activeClassName={s.active}>main</NavLink>
            <NavLink to={PATH.LOGIN} className={s.link} activeClassName={s.active}>login</NavLink>
            {/*<NavLink to={PATH.REGISTER} className={s.link} activeClassName={s.active}>register</NavLink>*/}
            <NavLink to={PATH.PROFILE} className={s.link} activeClassName={s.active}>profile</NavLink>
            {/*<NavLink to={PATH.FORGOT} className={s.link} activeClassName={s.active}>forgot</NavLink>*/}
            <NavLink to={PATH.SET_PASSWORD} className={s.link} activeClassName={s.active}>setPassword</NavLink>
            <NavLink to={PATH.PACKS_LIST} className={s.link} activeClassName={s.active}>PacksList</NavLink>
            <NavLink to={PATH.ERROR404} className={s.link} activeClassName={s.active}>error 404</NavLink>
            <SuperButton onClick={logoutHandler}>logout</SuperButton>
        </div>
    )
}

export default Header
