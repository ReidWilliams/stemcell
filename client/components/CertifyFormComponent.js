'use strict'

/*
  Really simple form styled with bootstrap css classes. Uses redux-form which automatically propogates
  each input field to the global redux state. 
*/

// Globals
import _ from 'lodash'
import React, { Component, dispatch, PropTypes } from 'react'
import { reduxForm } from 'redux-form'

import CertifyFormReceiverComponent from './CertifyFormReceiverComponent'

class CertifyFormComponent extends Component {
  render() {
    const { fields: { title, description }, handleSubmit, containerSubmit, receiver } = this.props
      // With redux-form we can pass a function to intercept submitting. handleSubmit is redux-forms's function
      // that will update the redux state. Submit is our function, supplied by a parent container to handle form
      // submission.

    let localContainerSubmit = function(formObject) {
      console.log('submitting')
      debugger
      formObject.receiver = receiver
      containerSubmit(formObject)
    }

    const placeholderName = this.props.receiverIsSelected? receiver : 'Mary'
    const textAreaPlaceholder = 'I have taught over 2,000 students and ' + placeholderName + ' is one of the best'
  
    // Don't use redux-form for receiver field
    return(  
      <div className="container-fluid">
        <div className="row">
          <form onSubmit={handleSubmit(containerSubmit)}>
            
            <div className="col-md-6">
              <CertifyFormReceiverComponent {...this.props} />
            </div>

            <div className="certify-form">
              <div className="title-details col-md-6">
                <div className="title">
                  <input type="text" placeholder="One of my best piano students" {...description} />
                </div>
                
                <div className="details">
                  <textarea placeholder={textAreaPlaceholder} {...title} />
                </div>

                <div className="button">
                  <button type="submit" className="btn btn-warning btn-lg" 
                  onClick={handleSubmit(localContainerSubmit)}>Certify!</button>
                </div>
              </div>
            </div>

          </form>
        </div>
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
  fields: ['title', 'description']
})(CertifyFormComponent)
