'use strict'

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
  handleSubmit(event) {
    debugger;
    console.log('submitted with event')
    console.log(event)
    console.log(this.state)
  }

  render() {
    // const { fields: { email, password }, handleSubmit, submit } = this.props
    return(
      <div className="id-login">
        <form>
          <h1>Login</h1>
          <div className="form-group">
            <label>Username</label>
            <input name="email" type="email" className="form-control" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input name="password" type="password" className="form-control" />
          </div>
          <button type="button" className="btn btn-warning btn-lg" onClick={this.handleSubmit}>Login</button>
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


// LoginFormComponent = reduxForm({
//   form: 'LogInForm',
//   fields: ['email', 'password'],
//   validate
// })(LoginFormComponent)


export default LoginFormComponent
