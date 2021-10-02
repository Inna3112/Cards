import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import s from '../../n2-features/f3-packs/Packs/Packs.module.css';
import {SuperButton} from '../c2-SuperButton/SuperButton';

type PropsType = {
    placeholder: string
    btnName: string
    setNameItem: (name: string) => void
}
export const SearchCardsBlock: React.FC<PropsType> = ({placeholder, btnName, setNameItem}) => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const changeHandler = () => {
        dispatch(setNameItem(name))
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