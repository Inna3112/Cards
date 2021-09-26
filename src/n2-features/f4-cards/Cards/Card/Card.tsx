import React from 'react'

type PropsType = {
    question: string
    answer: string
    grade: number
    updated: string
    packId: string
}
export const Card: React.FC<PropsType> = (props) => {
    let {
        question,
        answer,
        grade,
        updated,
        packId,
    } = props


    return (

        <tr>
            <td>{question}</td>
            <td>{answer}</td>
            <td>{grade}</td>
            <td>{updated}</td>
            <td><button>del</button></td>
            <td><button>update</button></td>
        </tr>

    )
}
