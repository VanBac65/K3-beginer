import React from 'react'

export default function Item({ img, name, des }) {
    return (
        <div className='item'>
            <div className='img'>
                <img src={img} />
            </div>
            <div className='item-bottom'>
                <div className='name'>
                    {name}
                </div>
                <div className='des'>
                    {des}
                </div>
            </div>
        </div>
    )
}
