import React from 'react'
import Logo from './logo'
import Nav from './nav'
import '../../../style/header/header.css'

export default function Header({ dataNav }) {
  return (
    <div className='header'>
      <Logo />
      <Nav dataNav={dataNav} />
    </div>
  )
}
