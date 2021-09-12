import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import {PATH} from '../routes/Routes';



function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.LOGIN} className={s.link} activeClassName={s.active}>login</NavLink>
            <NavLink to={PATH.REGISTRATION} className={s.link} activeClassName={s.active}>registration</NavLink>
            <NavLink to={PATH.PROFILE} className={s.link} activeClassName={s.active}>profile</NavLink>
            <NavLink to={PATH.PASSWORD_RECOVER} className={s.link} activeClassName={s.active}>password recover</NavLink>
            <NavLink to={PATH.ENTER_NEW_PASSWORD} className={s.link} activeClassName={s.active}>enter new password</NavLink>
        </div>
    )
}

export default Header
