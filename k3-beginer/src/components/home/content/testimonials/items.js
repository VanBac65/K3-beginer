import React from 'react'
import imgWestern from '../../../../image/western-man-4975942-4159828 1.png'
import imgAsian from '../../../../image/asian-woman-4975939-4159825 1.png'
import imgBlack from '../../../../image/black-woman-4975941-4159827 1.png'
import Item from './item'

export default function Items() {
    return (
        <div className='items'>
            <Item
                img={imgWestern}
                name={'Andrew Rathore'}
                des={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.'} />
            <Item
                img={imgAsian}
                name={'Vera Duncan'}
                des={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.'} />
            <Item
                img={imgBlack}
                name={'Mark Smith'}
                des={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.'} />
        </div>
    )
}
