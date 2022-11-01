import React from 'react'
import ItemFooter from './itemFooter'
import '../../../style/footer/footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <ItemFooter
                name='Digital Agency'
                arrString={['Building digital products, brands & experience']}
            />
            <ItemFooter
                name='Resources'
                arrString={['Guides','Blog','Cuistomer Stories','Glossery']}
            />
            <ItemFooter
                name='Company'
                arrString={['About Us','Careers','Partners','Contact Us']}
            />
            <ItemFooter
                name='Social Media'
                arrString={['LinkedIn','Facebook','Instagram','Twitter']}
            />
        </div>
    )
}
