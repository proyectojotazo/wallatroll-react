import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'

import useAuth from '../contexts/useAuth'

const PrivateRoute = ({ component: Component, ...props }) => {
  const { isLogged } = useAuth()
  const location = useLocation()

  return (
    <Route {...props}>
      {isLogged ? (
        <Component />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { next: location.pathname } }}
        />
      )}
    </Route>
  )
}

export default PrivateRoute
