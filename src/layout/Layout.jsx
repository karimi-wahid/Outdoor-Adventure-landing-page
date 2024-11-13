import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div>
        
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout