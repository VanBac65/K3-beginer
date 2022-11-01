import React from 'react'

export default function ItemFooter({ name, arrString }) {
    return (
        <div className='itemFooter'>
            <div className='name-itemFooter'>
                {name}
            </div>
            <ul>
                {
                    arrString.map((el, index) => {
                        return (
                            <li key={index}>
                                {el}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
