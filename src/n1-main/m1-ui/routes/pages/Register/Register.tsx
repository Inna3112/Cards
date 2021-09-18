import React from 'react'
import {SuperInputText} from '../../../../../common/c1-SuperInputText/SuperInputText';
import {SuperButton} from '../../../../../common/c2-SuperButton/SuperButton';
import s from './Register.module.css'


export const Register = () => {
    return (
        <div className={s.register}>
            <h1>Register</h1>
            <SuperInputText />
            <SuperInputText />
            <SuperInputText />
            <SuperButton />
            <SuperButton />
        </div>
    )
}


