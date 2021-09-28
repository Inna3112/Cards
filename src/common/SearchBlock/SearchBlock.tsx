import React, {useState} from 'react';
import {setPackName, setPacksSuccess} from '../../n1-main/m2-bll/packs-reducer';
import {useDispatch} from 'react-redux';
import s from "../../n2-features/f3-packs/Packs/Packs.module.css";
import {SuperButton} from "../c2-SuperButton/SuperButton";

export const SearchBlock = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const changeHandler = () => {
        dispatch(setPackName(name))
        dispatch(setPacksSuccess())
        setName('')
    }
    return (
        <div className={s.searchBlock}>
            <input className={s.packInput}
                   placeholder={'Search'}
                   value={name}
                   onChange={(e) => {
                       setName(e.currentTarget.value)
                   }}
            />
            <SuperButton color={"blue"} onClick={changeHandler}>Search</SuperButton>
        </div>
    )
}