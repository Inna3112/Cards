import React from 'react';
import {SuperInputText} from '../../common/c1-SuperInputText/SuperInputText';
import {SuperButton} from '../../common/c2-SuperButton/SuperButton';
import {SuperCheckbox} from '../../common/c3-SuperCheckbox/SuperCheckbox';
import s from './Test.module.css'

export const Test = () => {
    return (
        <div className={s.test}>
            <SuperInputText className={s.input}/>
            <SuperButton>Click me</SuperButton>
            <SuperCheckbox />
        </div>
    )
}