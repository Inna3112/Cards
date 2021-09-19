import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../m2-bll/store';
import s from './Profile.module.css'
import {setProfileSuccess} from '../../../../m2-bll/profile-reducer';
import {UserType} from '../../../../m3-dal/api';


export const Profile = () => {
    const userProfile = useSelector<AppRootStateType, UserType>(state => state.profile.userProfile)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setProfileSuccess())
    }, [])

    return (
        <div className={s.profileBlock}>
            <img className={s.img} src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" alt="avaImg"/>
            <div>{userProfile.name}</div>
            <div>{userProfile.publicCardPacksCount}</div>
        </div>
    )
}


