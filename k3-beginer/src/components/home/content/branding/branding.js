import React from 'react'
import TitleDes from '../../../../commom/titleDes'
import BrandingImage from './brandingImage'
import '../../../../style/content/branding/branding.css'
import ButtonArrow from '../../../../commom/buttonArrow'

export default function Branding() {
    return (
        <div className='branding'>
            <div className='left'>
                <BrandingImage/>
            </div>
            <div className='right'>
                <TitleDes
                    title={'Branding & Design system'}
                    des={'Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups'}
                />
                <ButtonArrow/>
            </div>
        </div>
    )
}
