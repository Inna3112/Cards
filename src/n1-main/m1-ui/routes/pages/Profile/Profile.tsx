import React from 'react'
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../m2-bll/store';
import s from './Profile.module.css'


export const Profile = () => {
    const userProfile = useSelector((state: AppRootStateType) => state.profile.userProfile)
debugger
    return (
        <div className={s.profileBlock}>
            <img className={s.img} src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fklike.net%2Fuploads%2Fposts%2F2019-03%2F1551511801_1.jpg&imgrefurl=https%3A%2F%2Fklike.net%2F1345-kartinki-na-avatarku-50-foto.html&tbnid=qDWk40K-Qn0NFM&vet=12ahUKEwikxofS3orzAhVqAHcKHceHDiYQMygAegUIARCrAQ..i&docid=-Owao9O1M8kDMM&w=700&h=525&q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D1%83&ved=2ahUKEwikxofS3orzAhVqAHcKHceHDiYQMygAegUIARCrAQ" alt="avaImg"/>
            <div>{userProfile.name}</div>
            <div>{userProfile.publicCardPacksCount}</div>
        </div>
    )
}


