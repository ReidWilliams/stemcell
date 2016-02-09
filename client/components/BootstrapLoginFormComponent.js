'use strict'

/*
  Really simple form styled with bootstrap css classes. Uses redux-form which automatically propogates
  each input field to the global redux state. 
*/

// Globals
import _ from 'lodash'
import validator from 'validator'
import React, { Component, dispatch, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router'

class LoginFormComponent extends Component {
  render() {
    const { fields: { username, password }, handleSubmit, containerSubmit } = this.props
      // With redux-form we can pass a function to intercept submitting. handleSubmit is redux-forms's function
      // that will update the redux state. Submit is our function, supplied by a parent container to handle form
      // submission.
    return(
      <div className="id-login">
        <form onSubmit={handleSubmit(containerSubmit)}>
          <h1>Login</h1>
          <p>You&#39;ll need a keybase account to sign in. Ask Reid or Dan for an invitation if you don&#39;t already have one.</p>
          <div className="form-group">
            <label>Keybase Username</label>
            <input type="text" className="form-control" {...username} />
          </div>
          <div className="form-group">
            <label>Keybase Password</label>
            <input type="password" className="form-control" {...password} />
          </div>
          <button type="submit" className="btn btn-warning btn-lg" onClick={handleSubmit(containerSubmit)}>Login</button>
        </form>
      </div>
    )
  }
}


LoginFormComponent.propTypes = {
  containerSubmit: PropTypes.func.isRequired
  // don't check other fields, they're handled by redux-form
}

LoginFormComponent = reduxForm({
  form: 'BootstrapLoginFormComponent',
  fields: ['username', 'password']
})(LoginFormComponent)


export default LoginFormComponent
