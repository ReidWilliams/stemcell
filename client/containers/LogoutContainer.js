'use strict'

// logout container

// Globals
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import * as actions from './../actions/logoutActions'
import { history } from './../config/history'


function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch) {
  return {
  	LogoutUser: () => {
      dispatch(actions.logoutUser(false))
    }
  }
}

class LogoutContainer extends Component {
	componentWillMount() {
    this.props.LogoutUser()
    .then(() => {
    	console.log("User has been logged out")
    	history.replaceState(null, '/')
    })
  }

  render() {
		let imgStyle = {
      width: 'auto',
      height: 'auto'
    }

    return(
      <div className="container">
        <div className="col-sm-6">
          <img src="/assets/gif/ajax-loader.gif" className="img-responsive center-block" style={imgStyle}></img>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutContainer)