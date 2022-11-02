import React from 'react'
import ItemFooter from './itemFooter'
import '../../../style/footer/footer.css'

export default function Footer({ dataFooter }) {
    console.log(dataFooter)
    return (
        <div className='footer'>
            {
                dataFooter.map((el) => {
                    return (
                        <ItemFooter key={el.name} name={el.name} arrString={el.item} />
                    )
                })
            }
        </div>
    )
}
