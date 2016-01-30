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

class CertifyFormComponent extends Component {
  render() {
    const { fields: { title, description, receiver }, handleSubmit, containerSubmit } = this.props
      // With redux-form we can pass a function to intercept submitting. handleSubmit is redux-forms's function
      // that will update the redux state. Submit is our function, supplied by a parent container to handle form
      // submission.
    let style = {
      'margin-top': '100px'
    }
    
    return(  
      <div style={style}>
        <form onSubmit={handleSubmit(containerSubmit)}>
          <div className="form-group">
            <label>Certify </label><input type="text" className="form-control" placeholder="keybase username" {...receiver} />
          </div>
     
          <div className="form-group">
            <label>What did he or she do that is awesome?</label>
            <input type="textarea" className="form-control" {...description} />
          </div>
          <div className="form-group">
            <label>Give your certificate a title</label>
            <input type="text" className="form-control" {...title} />
          </div>
          <button type="submit" className="btn btn-warning btn-lg" onClick={handleSubmit(containerSubmit)}>Certify!</button>
        </form>
      </div>
    )
  }
}



// CertifyFormComponent.propTypes = {
//   submit: PropTypes.func.isRequired,
//   appErrors: PropTypes.array.isRequired,
//   currentUser: PropTypes.object.isRequired
// }

export default reduxForm({
  form: 'CertifyFormComponent',
  fields: ['title', 'description', 'receiver']
})(CertifyFormComponent)
