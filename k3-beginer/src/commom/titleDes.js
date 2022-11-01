import React from 'react'
import '../style/commom/titleDes.css'

export default function TitleDes({ title, des }) {
    return (
        <>
            <div className='title'>
                {title}
            </div>
            <div className='des'>
                {des}
            </div>
        </>
    )
}
