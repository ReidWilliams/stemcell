'use strict'

// Globals
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import LoginFormComponent from './../components/BootstrapLoginFormComponent'
import * as actions from './../actions/logInActions'


function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    appErrors: state.appErrors
  }
}

function mapDispatchToProps(dispatch) {
  return {
    submit: (pendingUser) => dispatch(actions.logIn(pendingUser))
  }
}

class LoginContainer extends Component {
  render() {
    let submit = function(email, password) {
      console.log(email + ' ' + password)
    }

    return(
      <div className="container">
        <div className="col-sm-6 col-sm-offset-3">
          <LoginFormComponent submit={submit} />
        </div>
      </div>
    )
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
export default LoginContainer
