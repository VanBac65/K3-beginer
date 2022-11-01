import '../style/commom/titleDes.css'

import React, { Component } from 'react'

export default class TitleDes extends Component {
    constructor({ title, des }) {
        super()
        this.state = ({
            title: title,
            des: des
        })

    }
    render() {
        return (
            <>
                <div className='title'>
                    {this.state.title}
                </div>
                <div className='des'>
                    {this.state.des}
                </div>
            </>
        )
    }
}

