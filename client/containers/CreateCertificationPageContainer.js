'use strict'

// Globals
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Locals
import CertifyFormComponent from '../components/CertifyFormComponent'
import UserProfileCardComponent from '../components/UserProfileCardComponent'
import CardComponent from '../components/CardComponent'
import * as userActions from './../actions/userActions'
import * as certifyActions from '../actions/certifyActions'

import { CERTIFY_STATE_NOT_STARTED, CERTIFY_STATE_STARTED, CERTIFY_STATE_SUCCESS, CERTIFY_STATE_FAILED } from '../constants/actionTypes'


function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.data,
    certifyPerson: state.certifyPerson,
    appErrors: state.appErrors,
    receiverUsernameSearchResults: state.receiverUsernameSearchResults
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchContainerData: function() {
      dispatch(userActions.currentUserFetch())
    },
    containerSubmit: function(formObject) {
      dispatch(certifyActions.certifySomeone(formObject))
    },
    usernameChanged: function(event) {
      dispatch(certifyActions.usernameChanged(event.target.value))
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
      comp = (<h1>certifying...</h1>)
      break

      case CERTIFY_STATE_SUCCESS:
      comp = (<h1>success</h1>)
      break

      case CERTIFY_STATE_FAILED:
      comp = (<h1>there was a problem...</h1>)
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