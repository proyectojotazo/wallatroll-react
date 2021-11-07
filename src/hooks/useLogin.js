import { useState } from 'react'

import { userServices } from '../api'

import { storage } from '../utils'

const isAuth = () => !!storage.get('token')

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
    await userServices.logout()
    setIsLogged(false)
  }

  return {
    isLogged,
    handleLogin,
    handleLogout
  }
}

export default useLogin
