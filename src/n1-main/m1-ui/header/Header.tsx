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
        </div>
    )
}

export default Header
