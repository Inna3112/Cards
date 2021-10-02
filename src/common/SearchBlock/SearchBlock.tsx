import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import s from '../../n2-features/f3-packs/Packs/Packs.module.css';
import {SuperButton} from '../c2-SuperButton/SuperButton';

type PropsType = {
    placeholder: string
    btnName: string
    setNameItem: (name: string) => void
    setItemsSuccess: () => void
}
export const SearchBlock: React.FC<PropsType> = ({placeholder, btnName, setNameItem, setItemsSuccess}) => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const changeHandler = () => {
        // dispatch(setPackName(name))
        // dispatch(setPacksSuccess())
        dispatch(setNameItem(name))
        dispatch(setItemsSuccess())
        setName('')
    }
    return (
        <div className={s.searchBlock}>
            <input className={s.packInput}
                   placeholder={placeholder}
                   value={name}
                   onChange={(e) => {
                       setName(e.currentTarget.value)
                   }}
            />
            <SuperButton color={"blue"} onClick={changeHandler}>{btnName}</SuperButton>
        </div>
    )
}