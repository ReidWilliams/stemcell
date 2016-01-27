'use strict'

// Globals
import _ from 'lodash'
import assert from 'assert'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Router, Route, IndexRoute } from 'react-router'

import AppContainer from './../containers/AppContainer'
import CertificationsContainer from './../containers/CertificationsContainer'
import LandingContainer from './../containers/LandingContainer'
import LoginContainer from './../containers/LoginContainer'
import signUpContainer from './../containers/signUpContainer'
import { currentUserFetch } from './../actions/userActions'

module.exports = (appStore) => {
  assert(_.isObject(appStore))

  // For info on the callback see: 
  // https://github.com/rackt/react-router/blob/master/docs/API.md#onenternextstate-replace-callback
  // const ensureAuthenticated = (nextState, replaceState, callback) => {
   
    // const { currentUser } = appStore.getState()
    // if (!currentUser.isLoggedIn) {
    //   // try to grab user data before directing to /login
    //   appStore.dispatch(currentUserFetch()).then(() => {
    //     callback()
    //   }).catch(() => {
    //     replaceState(null, '/login')
    //   })
    // }
  //   callback()
  // }

  return (
    <Route path="/" component={ AppContainer }>
      <IndexRoute component={ LandingContainer } />
      <Route path="signup" component={ signUpContainer } />
      <Route path="login" component={ LoginContainer } />
      <Route path="me" component={ CertificationsContainer } />
    </Route>
  )
}