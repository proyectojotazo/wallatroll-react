import { useState } from 'react'

import { logout } from '../components/services'

import isAuth from '../utils/isAuth'

const useLogin = () => {
  /**
   * It will be the global context for know if user is logged or not
   * and the functions to set it
   */
  const [isLogged, setIsLogged] = useState(isAuth)

  const handleLogin = () => {
    setIsLogged(true)
  }

  const handleLogout = async () => {
    await logout()
    setIsLogged(false)
  }

  return {
    isLogged,
    handleLogin,
    handleLogout
  }
}

export default useLogin
