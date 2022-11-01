import React from 'react'
import Logo from '../components/home/header/logo'
import Nav from '../components/home//header/nav'
import '../style/index.css'
import Header from '../components/home/header/header'
import Content from '../components/home/content/content'
import Footer from '../components/home/footer/footer'

export default function Index() {
    return (
        <div className='container'>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}
