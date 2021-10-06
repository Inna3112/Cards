import React, {useState} from 'react'
import s from '../Cards.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../n1-main/m2-bll/store';
import {deleteCurd, updateCard} from '../../../../n1-main/m2-bll/cards-reducer';
import {CardsModalForDelete} from '../../../../n1-main/m1-ui/Components/Modal/CardsModal/CardsModalForDelete';
import {CardsModalForUpdate} from "../../../../n1-main/m1-ui/Components/Modal/CardsModal/CardsModalForUpdate";

type PropsType = {
    question?: string
    answer?: string
    grade?: number
    updated?: string
    packId: string
    packUserId: string
    _id: string
}
export const Card: React.FC<PropsType> = (props) => {
    const dispatch = useDispatch()
    const user_id = useSelector<AppRootStateType, string>(state => state.auth.user._id)
    let {
        question,
        answer,
        grade,
        updated,
        packId,
        packUserId,
        _id
    } = props

    const deleteCardHandler = () => {
        dispatch(deleteCurd(packId, _id))
    }
    const updateCardHandler = (newQuestion?: string, newAnswer?: string) => {
        dispatch(updateCard(_id, packId, newQuestion, newAnswer))
    }
    //modal
    const [isCardDeleteModal, setIsCardDeleteModal] = useState(false)
    const openCardDeleteModal = () => setIsCardDeleteModal(true)
    const closeCardDeleteModal = () => setIsCardDeleteModal(false)

    const [isCardUpdateModal, setIsCardUpdateModal] = useState(false)
    const openCardUpdateModal = () => setIsCardUpdateModal(true)
    const closeCardUpdateModal = () => setIsCardUpdateModal(false)

    return (
        <>
            <tr>
                <td>{question}</td>
                <td>{answer}</td>
                <td>{grade}</td>
                <td>{updated}</td>
                <td>
                    {user_id === packUserId &&
                    <button className={s.btn} onClick={openCardDeleteModal}>del</button>}
                    {user_id === packUserId &&
                    <button className={s.btn} onClick={openCardUpdateModal}>update</button>}
                </td>
            </tr>
            <div>{isCardDeleteModal && <CardsModalForDelete deleteCard={deleteCardHandler}
                                                   closeCardModal={closeCardDeleteModal}
            />}</div>
            <div>{isCardUpdateModal && <CardsModalForUpdate updateCard={updateCardHandler}
                                                      closeCardModal={closeCardUpdateModal}
                                                            question={question}
                                                            answer={answer}
            />}</div>
        </>
    )
}
