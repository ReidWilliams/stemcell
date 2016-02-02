'use strict'

// Globals
import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

import NavbarComponent from './../components/BootstrapNavbarComponent'

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

class appContainer extends Component {
  render() {

  	// names and routes for navigation bar
  	// FIXME: DRY, right new we're specifying names and routes for navbar here
  	// and routes and containers separately in routes.js
	  let navRoutes = [{ text: 'HOME', href: '/' }]

    if (this.props.currentUser.isLoggedIn) {
      navRoutes.push(  
        { text: 'ME', href: '/me' },
        { text: 'CERTIFY', href: '/certify' })
    } else {
      navRoutes.push(
        { text: 'LOGIN', href: '/login' })
    }

	  let activeRoute = this.props.location.pathname

    return(
    	// EXPLAIN why this.props.children here
      <div>
      	<NavbarComponent items={navRoutes} activeRoute={activeRoute} /> 
        {this.props.children}
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(appContainer)
