'use strict'

// Globals
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Locals
import CertificationCardsContainer from './CertificationCardsContainer'
import UserProfileCardComponent from '../components/UserProfileCardComponent'
import * as actions from './../actions/userActions'

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.data,
    appErrors: state.appErrors,
    subTitle: 'You\'re awesome and these certifications prove it'
  }
}


function mapDispatchToProps(dispatch) {
  return {
  	fetchContainerData: () => {
  		dispatch(actions.currentUserFetch())
  	}
  }
}


class CertificationsPageContainer extends Component {
	componentWillMount() {
		this.props.fetchContainerData()
	}

  render() {
    return(
      <div>
        <UserProfileCardComponent {...this.props}/>
        <CertificationCardsContainer {...this.props} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CertificationsPageContainer)