'use strict'

// Globals
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

import NavbarComponent from './../components/BootstrapNavbarComponent'

export default class appContainer extends Component {
  render() {

  	// names and routes for navigation bar
  	// FIXME: DRY, right new we're specifying names and routes for navbar here
  	// and routes and containers separately in routes.js
	  let navRoutes = [
	    {
	      text: 'HOME',
	      href: '/'
	    },
	    {
	      text: 'LOGIN',
	      href: '/login'
	    },
      {
        text: 'ME',
        href: '/me'
      },
      {
        text: 'CERTIFY',
        href: '/certify'
      }
	  ]

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
