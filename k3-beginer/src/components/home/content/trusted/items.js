import React from 'react'
import item1 from '../../../../image/Vector.png'
import item2 from '../../../../image/Company-logo.png'
import item3 from '../../../../image/Company-logo1.png'
import item4 from '../../../../image/Company-logo2.png'

export default function Items() {
    return (
        <div className='items'>
            <ul>
                <li>
                    <img src={item1} />
                </li>
                <li>
                    <img src={item2} />
                </li>
                <li>
                    <img src={item3} />
                </li>
                <li>
                    <img src={item4} />
                </li>
            </ul>
        </div>
    )
}
