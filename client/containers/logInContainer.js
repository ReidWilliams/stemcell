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
    // pass this as a prop to component. It'll get called with an object
    // when the form is submitted
    containerSubmit: (formObject) => dispatch(actions.logIn(formObject.username, formObject.password))
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
