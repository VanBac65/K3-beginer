import React from 'react'
import Branding from './branding/branding'
import BuildingDigital from './buiding-digital/buildingDigital'
import Custom from './custom/custom'
import Support from './support/support'
import Testimonials from './testimonials/testimonials'
import Trusted from './trusted/trusted'

export default function Content() {
    return (
        <div className='content'>
            <BuildingDigital />
            <Trusted />
            <Branding />
            <Custom />
            <Testimonials />
            <Support />
        </div>
    )
}
