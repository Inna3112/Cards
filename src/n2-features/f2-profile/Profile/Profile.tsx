import React, {ChangeEvent, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../n1-main/m2-bll/store';
import s from './Profile.module.css'
import {UserType} from '../../../n1-main/m3-dal/api';
import {SuperInputText} from '../../../common/c1-SuperInputText/SuperInputText';
import {updateProfileSuccess} from '../../../n1-main/m2-bll/profile-reducer';


export const Profile = () => {
    const userProfile = useSelector<AppRootStateType, UserType>(state => state.profile.userProfile)
    const dispatch = useDispatch()

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
            <img className={s.img} src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" alt="avaImg"/>
            { !editMode
                ? <div onClick={activateEditMode}>{userProfile.name}</div>
                : <SuperInputText value={name} onChange={changeName} onBlur={setNewName}/>}
            <div>{userProfile.publicCardPacksCount}</div>
        </div>
    )
}


