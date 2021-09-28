import React, {ChangeEvent, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../n1-main/m2-bll/store';
import s from './Profile.module.css'
import {UserType} from '../../../n1-main/m3-dal/api';
import {setProfileSuccess, updateProfileSuccess} from '../../../n1-main/m2-bll/profile-reducer';


export const Profile = () => {

    const userProfile = useSelector<AppRootStateType, UserType>(state => state.profile.userProfile)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setProfileSuccess())
    }, [dispatch])

    const [editMode, setEditMode] = useState(false)
    const [name, setName] = useState(userProfile.name)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const changeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const setNewName = () => {
        dispatch(updateProfileSuccess(name, userProfile.avatar))
        setEditMode(false)
    }
    return (
        <div className={s.profileBlock}>
            <img className={s.img} src={userProfile.avatar ? userProfile.avatar : "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"}
                 alt="avaImg"/>
            { !editMode
                ? <h3 onClick={activateEditMode}>{userProfile.name}</h3>
                : <input value={name} onChange={changeName} onBlur={setNewName}/>}
            <div>Packs count: {userProfile.publicCardPacksCount}</div>
        </div>
    )
}


