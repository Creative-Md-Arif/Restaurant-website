import React from 'react'
import Navbar from './components/Navbar'
import TopNavbar from './components/TopNavbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
  <>
     <TopNavbar/>
     <Navbar/>
     <Outlet/>
  </>
  )
}

export default Layout