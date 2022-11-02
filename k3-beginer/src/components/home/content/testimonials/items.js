import React, { useEffect, useState } from 'react'
import imgWestern from '../../../../image/western-man-4975942-4159828 1.png'
import imgAsian from '../../../../image/asian-woman-4975939-4159825 1.png'
import imgBlack from '../../../../image/black-woman-4975941-4159827 1.png'
import Item from './item'
import { getUsers } from '../../../../services/users'

export default function Items({ dataUser }) {
    return (
        <div className='items'>
            <Item
                img={dataUser[0]?.img}
                name={dataUser[0]?.name}
                des={dataUser[0]?.des} />
            <Item
                img={dataUser[1]?.img}
                name={dataUser[1]?.name}
                des={dataUser[1]?.des} />
            <Item
                img={dataUser[2]?.img}
                name={dataUser[2]?.name}
                des={dataUser[2]?.des} />
        </div>
    )
}
