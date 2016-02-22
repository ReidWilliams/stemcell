'use strict'

// Globals
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import LoginFormComponent from './../components/BootstrapLoginFormComponent'
import * as actions from './../actions/loginActions'
//import { history } from './../config/history'
import { routeActions } from 'react-router-redux'


function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    // pass this as a prop to component. It'll get called with an object
    // when the form is submitted
    containerSubmit: (formObject) => {

      // // FIXME: just for testing
      // formObject.username = 'tkodev'
      // formObject.password = 'IDEObitsblocks'

      dispatch(actions.login(formObject.username, formObject.password))
      .then(() => {
        console.log('user is logged in!')
        dispatch(routeActions.push('/me'))
        //history.replaceState(null, '/me')
      })
    }
  }
}

class LoginContainer extends Component {
  render() {
    return(
      <div className="container">
        <div className="col-sm-6 col-sm-offset-3">
          <LoginFormComponent { ...this.props } />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
// export default LoginContainer
