import React from 'react'
import Logo from './logo'
import Nav from './nav'
import '../../../style/header/header.css'

export default function Header() {
  return (
    <div className='header'>
      <Logo/>
      <Nav/>
    </div>
  )
}
