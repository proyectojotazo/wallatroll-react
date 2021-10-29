import React from 'react'

import AppRouter from './routers/AppRouter'
import Layout from './components/layout/'

import { AuthProvider } from './contexts'

import './App.css'

const App = () => {
  return (
    <AuthProvider>
      <Layout>
        <AppRouter />
      </Layout>
    </AuthProvider>
  )
}

export default App
