import React from 'react'
import arrowImg from '../image/Arrow 1.png'
import '../style/commom/buttonArrow.css'

export default function ButtonArrow() {
    return (
        <div className='arrow'>
            <img src={arrowImg} />
        </div>
    )
}
