import React from 'react'
import s from './Header.module.css'
import {NavLink} from 'react-router-dom'
import {PATH} from '../routes/Routes';
import {SuperButton} from '../../../common/c2-SuperButton/SuperButton';
import {logoutSuccess} from '../../m2-bll/auth-reducer';
import {useDispatch} from 'react-redux';


function Header() {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logoutSuccess())
    }

    return (
        <div className={s.header}>
            <div className={s.links}>
                {/*<NavLink to={PATH.MAIN} className={s.link} activeClassName={s.active}>main</NavLink>*/}
                {/*<NavLink to={PATH.LOGIN} className={s.link} activeClassName={s.active}>login</NavLink>*/}
                {/*<NavLink to={PATH.REGISTER} className={s.link} activeClassName={s.active}>register</NavLink>*/}
                <NavLink to={PATH.PROFILE} className={s.link} activeClassName={s.active}>Profile</NavLink>
                {/*<NavLink to={PATH.FORGOT} className={s.link} activeClassName={s.active}>forgot</NavLink>*/}
                {/*<NavLink to={PATH.SET_PASSWORD} className={s.link} activeClassName={s.active}>setPassword</NavLink>*/}
                <NavLink to={PATH.PACKS_LIST} className={s.link} activeClassName={s.active}>PacksList</NavLink>
                {/*<NavLink to={PATH.CARDS} className={s.link} activeClassName={s.active}>Cards</NavLink>*/}
                {/*<NavLink to={PATH.LEARN} className={s.link} activeClassName={s.active}>Learn</NavLink>*/}
                {/*<NavLink to={PATH.ERROR404} className={s.link} activeClassName={s.active}>error 404</NavLink>*/}
                {/*<NavLink to={PATH.LOGIN}><SuperButton color={"blue"} onClick={logoutHandler}>logout</SuperButton></NavLink>*/}
            </div>
            <SuperButton color={"blue"} onClick={logoutHandler}>logout</SuperButton>
        </div>
    )
}

export default Header
