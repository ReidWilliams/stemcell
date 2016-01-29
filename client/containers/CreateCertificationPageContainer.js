'use strict'

// Globals
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Locals
import CertifyFormComponent from '../components/CertifyFormComponent'
import UserProfileCardComponent from '../components/UserProfileCardComponent'
import * as userActions from './../actions/userActions'
import * as certifyActions from '../actions/certifyActions'

import { CERTIFY_STATE_NOT_STARTED, CERTIFY_STATE_STARTED, CERTIFY_STATE_SUCCESS, CERTIFY_STATE_FAILED } from '../constants/actionTypes'


function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.data,
    certifyPerson: state.certifyPerson,
    appErrors: state.appErrors,
    subTitle: 'Got something to say? Certify it'
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchContainerData: function() {
      dispatch(userActions.currentUserFetch())
    },
    containerSubmit: function(formObject) {
      dispatch(certifyActions.certifySomeone(formObject))
    }
  }
}

class CreateCertificationPageContainer extends Component {
  render() {
    let comp = undefined

    switch(this.props.certifyPerson.certifyState) {
      case CERTIFY_STATE_NOT_STARTED:
      comp = (<CertifyFormComponent { ...this.props } />)
      break

      case CERTIFY_STATE_STARTED:
      comp = (<p>certifying...</p>)
      break

      case CERTIFY_STATE_SUCCESS:
      comp = (<p>success</p>)
      break

      case CERTIFY_STATE_FAILED:
      comp = (<p>there was a problem...</p>)
      break
    }

    return(
      <div>
        <div className="container">
          <div className="col-sm-6 col-sm-offset-3">
            {comp} 
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCertificationPageContainer)