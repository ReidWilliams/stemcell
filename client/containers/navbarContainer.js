'use strict'

// Globals
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'


export default class navbarContainer extends Component {
  render() {
    return(
     	<nav class="navbar navbar-default" role="navigation">
	  		<div class="container-fluid">

		    	<!-- Collect the nav links, forms, and other content for toggling -->
		    	<div class="collapse navbar-collapse" id="navigation bar">
		      	<ul class="nav navbar-nav">
		        	<li class="active"><a href="/index">HOME</a></li>
		        	<li class="inactive"><a href="/certify">CERTIFY</a></li>
		        	<li class="inactive"><a href="/verify">VERIFY</a></li>
		        	<li class="inactive"><a href="https://medium.com/@ideofutures">BLOG</a></li>
		      	</ul>
		    	</div><!-- /.navbar-collapse -->
	  		</div><!-- /.container-fluid -->
			</nav>
    )
  }
}


// <p>You can really only <Link to="/logout">log out</Link>...</p>