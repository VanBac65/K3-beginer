import React, { useEffect, useState } from 'react'
import '../style/index.css'
import Header from '../components/home/header/header'
import Content from '../components/home/content/content'
import Footer from '../components/home/footer/footer'
import { getUsers } from '../services/users'
import { getNav } from '../services/nav'
import { getFooter } from '../services/footer'

export default function Index() {
    const [dataUser, setDataUser] = useState([])
    const [dataNav, setDataNav] = useState([])
    const [dataFooter, setDataFooter] = useState([])
    useEffect(() => {
        const getData = async () => {
            const users = await getUsers()
            setDataUser(users)
            const nav = await getNav()
            setDataNav(nav)
            const footer = await getFooter()
            setDataFooter(footer)
        }
        getData()
    }, [])
    return (
        <div className='container'>
            <Header dataNav={dataNav} />
            <Content dataUser={dataUser} />
            <Footer dataFooter={dataFooter} />
        </div>
    )
}
