import React, { Component } from 'react'
import arrowImg from '../image/Arrow 1.png'
import '../style/commom/buttonArrow.css'

export default class buttonArrow extends Component {
    render() {
        return (
            <div className='arrow'>
                <img src={arrowImg} />
            </div>
        )
    }
}

