import React from 'react'
import ButtonContactUs from '../../../../commom/buttonContactUs'
import BudingImage from './budingImage'
import TitleBuildingDigital from './titleBuildingDigital'
import '../../../../style/content/buidingDigital/buiding-digital.css'

export default function BuildingDigital() {
    return (
        <div className='building-digital'>
            <div className='left'>
                <TitleBuildingDigital />
                <ButtonContactUs />
            </div>
            <div className='right'>
                <BudingImage />
            </div>
        </div>
    )
}
