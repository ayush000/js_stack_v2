// @flow

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'

import { APP_NAME } from './config'
import Nav from './component/nav'
import HomePage from './component/page/home'
import HelloPage from './component/page/hello'
import HelloAsyncPage from './component/page/hello-async'
import NotFoundPage from './component/page/not-found'
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
} from './routes'

const App = () =>
  <div>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <h1>{APP_NAME}</h1>
    <Nav />
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} component={HomePage} />
      <Route path={HELLO_PAGE_ROUTE} component={HelloPage} />
      <Route path={HELLO_ASYNC_PAGE_ROUTE} component={HelloAsyncPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>

export default App
