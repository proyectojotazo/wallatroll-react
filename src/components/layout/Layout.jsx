import React from 'react'
import Header from './Header'

import './Layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='layout-main'>{children}</main>
      <footer className='layout-footer'>© 2021 Javier Guerrero</footer>
    </>
  )
}

export default Layout
