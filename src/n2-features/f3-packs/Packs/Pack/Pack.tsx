import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../n1-main/m2-bll/store';
import {UserType} from '../../../../n1-main/m3-dal/api';
import {NavLink} from 'react-router-dom';
import s from '../Packs.module.css';
import {deletePack, updatePack} from '../../../../n1-main/m2-bll/packs-reducer';
import {PacksModalForDelete} from '../../../../n1-main/m1-ui/Components/Modal/PacksModal/PacksModalForDelete';
import {PacksModalForUpdate} from '../../../../n1-main/m1-ui/Components/Modal/PacksModal/PacksModalForUpdate';

type PropsType = {
    _id: string
    user_id: string
    user_name: string
    name: string
    path: string
    cardsCount: number
    grade: number
    shots: number
    rating: number
    type: string
    created: string
    updated: string
}
export const Pack: React.FC<PropsType> = (props) => {
    let {
        _id,
        user_id,
        user_name,
        name,
        path,
        cardsCount,
        grade,
        shots,
        rating,
        type,
        created,
        updated
    } = props

    const dispatch = useDispatch()
    const user = useSelector<AppRootStateType, UserType | null>(state => state.auth.user)

    //modal
    const [isPackDeleteModal, setIsPackDeleteModal] = useState(false)
    const openPackDeleteModal = () => setIsPackDeleteModal(true)
    const closePackDeleteModal = () => setIsPackDeleteModal(false)

    const [isPackUpdateModal, setIsPackUpdateModal] = useState(false)
    const openPackUpdateModal = () => setIsPackUpdateModal(true)
    const closePackUpdateModal = () => setIsPackUpdateModal(false)

    const deleteHandler = () => {
        dispatch(deletePack(_id))
    }
    const updateHandler = (newPackName: string) => {
        dispatch(updatePack(_id, newPackName))
    }

    return (

        <tr className={s.cardBlock}>
            <NavLink className={s.cardNameLink} to={`/cards/${_id}`}>
                <td>{name}</td>
            </NavLink>
            <td>{cardsCount}</td>
            <td>{new Date(updated).toLocaleDateString('ru', {day: '2-digit', month: '2-digit', year: 'numeric'})}</td>
            <td>{user_name}</td>
            <td>
                {user_id === user?._id &&
                <button className={s.btn} onClick={openPackDeleteModal}>del</button>}
                {user_id === user?._id &&
                <button className={s.btn} onClick={openPackUpdateModal}>update</button>}
                <div>{isPackDeleteModal && <PacksModalForDelete deletePack={deleteHandler}
                                                                closePackModal={closePackDeleteModal}
                />}</div>
                <div>{isPackUpdateModal && <PacksModalForUpdate updatePackName={updateHandler}
                                                                closePackModal={closePackUpdateModal}
                                                                title={name}
                />}</div>
                <button className={s.btn}>learn</button>
            </td>
        </tr>

    )
}
