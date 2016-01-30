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
            <div className="search-result-user-card">
              <CardComponent title="Dan Elitzer" icon="https://s3.amazonaws.com/keybase_processed_uploads/840f766807fc8dd92aa3abe8fe34ba05_200_200_square_200.jpeg"/>
            </div>
            {comp} 
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCertificationPageContainer)