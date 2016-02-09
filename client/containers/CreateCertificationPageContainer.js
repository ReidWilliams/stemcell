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
    receiverUsernameSearchResults: state.receiverUsernameSearchResults,
    receiver: state.certifyPerson.receiver,
    receiverIsSelected: state.certifyPerson.receiverIsSelected
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
    receiverChanged: function(event) {
      dispatch(certifyActions.receiverChanged(event.target.value))
    },
    usernameSearchResultClicked(username) {
      dispatch(certifyActions.receiverSelected(username))
    }
  }
}

class CreateCertificationPageContainer extends Component {
  componentWillMount() {
    this.props.fetchContainerData()
  }

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
        <UserProfileCardComponent {...this.props} subTitle="Tell the world how great someone is"/>
        {comp} 
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCertificationPageContainer)