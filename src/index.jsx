import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import { setAuthorizationHeader } from './api/client'
import storage from './utils/storage'

const accessToken = storage.get('token')
setAuthorizationHeader(accessToken)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
