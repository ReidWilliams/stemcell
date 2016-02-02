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

// import { CURRENT_USER_ERROR } from './../constants/errorTypes'


// const validate = (values) => {
//   const errors = {}
//   if (!values.email) {
//     errors.email = 'Required'
//   } else if (!validator.isEmail(values.email)) {
//     errors.email = 'Must be a valid email'
//   }
//   if (!values.password) {
//     errors.password = 'Required'
//   } else if (values.password.length < 8) {
//     errors.password = 'Password too short' 
//   }
//   return errors
// }


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
          <p>this is p</p>
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" placeholder="reidw" {...username} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" {...password} />
          </div>
          <button type="submit" className="btn btn-warning btn-lg" onClick={handleSubmit(containerSubmit)}>Login</button>
        </form>
      </div>
    )
  }
}



// LoginFormComponent.propTypes = {
//   submit: PropTypes.func.isRequired,
//   appErrors: PropTypes.array.isRequired,
//   currentUser: PropTypes.object.isRequired
// }

LoginFormComponent = reduxForm({
  form: 'BootstrapLoginFormComponent',
  fields: ['username', 'password']
})(LoginFormComponent)


export default LoginFormComponent
