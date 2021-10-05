import React, {ChangeEvent, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../n1-main/m2-bll/store';
import s from './Profile.module.css'
import {UserType} from '../../../n1-main/m3-dal/api';
import {updateProfileSuccess} from '../../../n1-main/m2-bll/auth-reducer';
import {Redirect} from "react-router-dom";


export const Profile = () => {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const user = useSelector<AppRootStateType, UserType>(state => state.auth.user)
    const dispatch = useDispatch()

    const [editMode, setEditMode] = useState(false)
    const [name, setName] = useState(user.name)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const changeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const setNewName = () => {
        dispatch(updateProfileSuccess(name, user.avatar))
        setEditMode(false)
    }
    // const logoutHandler = () => {
    //     dispatch(logoutSuccess())
    // }
    if(!isLoggedIn){
        return <Redirect to={'/login'} />
    }
    return (
        <div className={s.profileBlock}>
            <img className={s.img} src={user.avatar ? user.avatar : "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"}
                 alt="avaImg"/>
            { !editMode
                ? <h3 onClick={activateEditMode}>{user.name}</h3>
                : <input value={name} onChange={changeName} onBlur={setNewName}/>}
            <div className={s.counts}>You have: {user.publicCardPacksCount} packs</div>
            {/*<SuperButton color={"blue"} onClick={logoutHandler}>logout</SuperButton>*/}
        </div>
    )
}


