'use strict'

// Globals
import _ from 'lodash'
import assert from 'assert'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Router, Route, IndexRoute } from 'react-router'

import AppContainer from '../containers/AppContainer'
import CertificationsPageContainer from './../containers/CertificationsPageContainer'
import CreateCertificationPageContainer from './../containers/CreateCertificationPageContainer'
import LandingContainer from './../containers/LandingContainer'
import LoginContainer from './../containers/LoginContainer'
import signUpContainer from './../containers/signUpContainer'
import { currentUserFetch } from './../actions/userActions'

module.exports = (appStore) => {
  assert(_.isObject(appStore))

  return (
    <Route path="/" component={ AppContainer }>
      <IndexRoute component={ LandingContainer } />
      <Route path="signup" component={ signUpContainer } />
      <Route path="login" component={ LoginContainer } />
      <Route path="me" component={ CertificationsPageContainer } />
      <Route path="certify" component={ CreateCertificationPageContainer } />
    </Route>
  )
}