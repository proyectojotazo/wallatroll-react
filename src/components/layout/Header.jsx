import React from 'react'
import Button from '../common/Button'
import wallaIcon from '../../assets/images/wallaicon.png'

import './Header.css'

const Header = () => {
  return (
    <header className='header-container'>
      <img src={wallaIcon} className='header-icon' />
      <h1 className='header-title'>WallaTroll</h1>
      <Button variant='primary' margin='my-2'>
        Login
      </Button>
      {/* <Button variant="danger">Logout</Button> */}
    </header>
  )
}

export default Header
