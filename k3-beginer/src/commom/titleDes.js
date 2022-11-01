// import React from 'react'
import '../style/commom/titleDes.css'

// export default function TitleDes({ title, des }) {
//     return (
//         <>
//             <div className='title'>
//                 {title}
//             </div>
//             <div className='des'>
//                 {des}
//             </div>
//         </>
//     )
// }

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

