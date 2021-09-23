import React, {useState} from 'react'
import {useDispatch} from 'react-redux';

type PropsType = {
    question: string
    answer: string
    grade: number
    updated: string
    url: string
}
export const Card: React.FC<PropsType> = (props) => {
    let {
        question,
        answer,
        grade,
        updated,
        url
    } = props

    const dispatch = useDispatch()
    const [cardName, setCardName] = useState('')

    const deleteHandler = () => {
        // dispatch(deletePackTC(props._id))
    }
    const updateHandler = () => {
        // dispatch(updatePackTC(props._id, packName))
    }
    const changeHandler = (name: string) => {
        setCardName(name)
    }

    const onClickQuestionHandle = () => {

    }
    return (

        <tr onClick={(e) => {
            if (e.currentTarget === e.target) {
                onClickQuestionHandle()
            }
            e.stopPropagation()
        }
        }>
            <td>{question}</td>
            <td>{answer}</td>
            <td>{grade}</td>
            <td>{updated}</td>
            <td>{url}</td>
        </tr>

    )
}
