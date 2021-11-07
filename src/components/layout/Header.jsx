import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../common'

import useAuth from '../../contexts/useAuth'

import wallaIcon from '../../assets/images/wallaicon.png'
import './Header.css'

const Header = () => {
  const { isLogged, handleLogout } = useAuth()

  return (
    <header className='header-container'>
      <img src={wallaIcon} className='header-icon' />
      <h1 className='header-title'>WallaTroll</h1>
      {isLogged ? (
        <>
          <div className='header-links-wrapper'>
            <Link to='/adverts/new' className='header-link-item'>
              Crear Anuncio
            </Link>
            <Link to='/adverts' className='header-link-item'>
              Página Principal
            </Link>
          </div>
          <Button variant='danger' margin='my-2' onClick={handleLogout}>
            Logout
          </Button>
        </>
      ) : (
        <div className='empty-container'></div>
      )}
    </header>
  )
}

export default Header
