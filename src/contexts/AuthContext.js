import React, { createContext } from 'react'
import { useLogin } from '../hooks'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const data = useLogin()

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export { AuthContext }

export default AuthProvider
