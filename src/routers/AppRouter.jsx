import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import {
  AdvertsPage,
  LoginPage,
  NewAdvertPage,
  AdvertPage,
  NotFoundPage
} from '../pages'

import PrivateRoute from './PrivateRoute'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path='/adverts' component={AdvertsPage} />
        <PrivateRoute exact path='/adverts/new' component={NewAdvertPage} />
        <PrivateRoute exact path='/advert/:id' component={AdvertPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/'>
          <Redirect to='/adverts' />
        </Route>
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </Router>
  )
}

export default AppRouter
