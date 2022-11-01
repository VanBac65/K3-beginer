import React from 'react'
import Items from './items'
import TitleTrusted from './titleTrusted'
import '../../../../style/content/trusted/trusted.css'

export default function Trusted() {
    return (
        <div className='trusted'>
            <TitleTrusted />
            <Items />
        </div>
    )
}
