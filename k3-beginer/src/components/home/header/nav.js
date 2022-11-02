import React from 'react'
import '../../../style/header/nav.css'

export default function Nav({ dataNav }) {
  return (
    <div className='nav'>
      <ul>
        {
          dataNav.map((el) => {
            return (<li key={el}>{el}</li>)
          })
        }
      </ul>
    </div>
  )
}
