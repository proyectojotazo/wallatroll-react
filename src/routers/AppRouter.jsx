import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { Layout } from '../components'

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
      <Layout>
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
      </Layout>
    </Router>
  )
}

export default AppRouter
