import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'

import './Layout.css'
import Loader from './Loader'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='layout-main'>{children}</main>
      <Loader />
      <footer className='layout-footer'>© 2021 Javier Guerrero</footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default Layout
