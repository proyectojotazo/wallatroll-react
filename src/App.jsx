import React from 'react'

import AppRouter from './routers/AppRouter'

import { AuthProvider } from './contexts'

import './App.css'

const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
