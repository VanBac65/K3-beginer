import React from 'react'
import ButtonArrow from '../../../../commom/buttonArrow'
import TitleDes from '../../../../commom/titleDes'
import ImageCustom from './imageCustom'
import '../../../../style/content/custom/custom.css'

export default function Custom() {
    return (
        <div className='custom'>
                <div className='left'>
                    <TitleDes
                        title={'Custome & Plugin Development'}
                        des={'Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups'}
                    />
                    <ButtonArrow />
                </div>
                <div className='right'>
                    <ImageCustom />
                </div>
        </div>
    )
}
