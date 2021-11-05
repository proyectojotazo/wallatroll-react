import React from 'react'
import ReactDOM from 'react-dom'
import { setAuthorizationHeader } from './api/client'

import App from './App'
import storage from './utils/storage'

const accessToken = storage.get('token')
setAuthorizationHeader(accessToken)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
