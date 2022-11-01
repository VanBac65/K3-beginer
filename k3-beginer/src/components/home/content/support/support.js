import React from 'react'
import ButtonContactUs from '../../../../commom/buttonContactUs'
import TitleDes from '../../../../commom/titleDes'
import '../../../../style/content/support/support.css'
import ImageSupport from './imageSupport'

export default function Support() {
    return (
        <div className='support'>
            <div className='left'>
                <ImageSupport />
            </div>
            <div className='right'>
                <TitleDes
                    title={'Be a part of the next big thing'}
                    des={'We work with Brans, Startups, to SMEs. Colaborate for more impact and growt'}
                />
                <ButtonContactUs />
            </div>
        </div>
    )
}