import React from 'react'
import Items from './items'
import TitleTestimonials from './titleTestimonials'
import '../../../../style/content/testimonails/testimonials.css'

export default function Testimonials() {
    return (
        <div className='testimonials'>
            <TitleTestimonials />
            <Items />
        </div>
    )
}
