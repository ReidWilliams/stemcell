'use strict'

// Globals
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'


export default class navbarComponent extends Component {
  render() {
    return(
     	<nav className="navbar navbar-default" role="navigation">
	  		<div className="container-fluid">

		    	<div className="collapse navbar-collapse" id="navigation bar">
		      	<ul className="nav navbar-nav">
		        	<li className="active"><a href="/index">HOME</a></li>
		        	<li className="inactive"><a href="/certify">CERTIFY</a></li>
		        	<li className="inactive"><a href="/verify">VERIFY</a></li>
		        	<li className="inactive"><a href="https://medium.com/@ideofutures">BLOG</a></li>
		      	</ul>
		    	</div>
	  		</div>
			</nav>
    )
  }
}