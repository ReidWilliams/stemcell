'use strict'

// Globals
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router'

// Locals
import * as actions from './../actions/userActions'

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    appErrors: state.appErrors
  }
}

function mapDispatchToProps(dispatch) {
  return {
  	fetchContainerData: () => {
  		dispatch(actions.currentUserFetch())
  	}
  }
}


class CertificationsContainer extends Component {
	componentWillMount() {
		this.props.fetchContainerData()
	}

  render() {
    return(
      <div>
        <h1>Your Dashboard</h1>
        <h3>This is a protected route</h3>
        <hr/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CertificationsContainer)


// <p>You can really only <Link to="/logout">log out</Link>...</p>