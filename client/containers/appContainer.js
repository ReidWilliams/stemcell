'use strict'

// Globals
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

import NavbarComponent from './../components/bootstrapNavbarComponent'

export default class appContainer extends Component {
  render() {
  	let items = [
  		{ text: "HOME",
  			href: "/",
  			active: true
  		},
  		{	text: "SIGN IN",
  			href: "login",
  			active: false
  		}]
    return(
    	// EXPLAIN why this.props.children here
      <div>
      	<NavbarComponent items={items}/> 
        {this.props.children}
      </div>
    )
  }
}
