'use strict'

// Globals
import _ from 'lodash'
import assert from 'assert'

import AppContainer from './../containers/AppContainer'
import CertificationsPageContainer from './../containers/CertificationsPageContainer'
import CreateCertificationPageContainer from './../containers/CreateCertificationPageContainer'
import LandingContainer from './../containers/LandingContainer'
import LoginContainer from './../containers/LoginContainer'

module.exports = (appStore) => {
  assert(_.isObject(appStore))

  return (
    <Route path="/" component={ AppContainer }>
      <IndexRoute component={ LandingContainer } />
      <Route path="login" component={ LoginContainer } />
      <Route path="me" component={ CertificationsPageContainer } />
      <Route path="certify" component={ CreateCertificationPageContainer } />
    </Route>
  )
}