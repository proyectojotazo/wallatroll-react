import React from 'react'

import './App.css'
import Layout from './components/layout/'
import { LoginPage } from './pages'

const App = () => (
  <div className='App'>
    <Layout>
      <LoginPage />
    </Layout>
  </div>
)

export default App
