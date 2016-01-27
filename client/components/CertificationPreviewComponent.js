'use strict'

// Globals
import React, { Component } from 'react'
import { Link } from 'react-router'

export default class BootstrapNavbarComponent extends Component {
  render() {
  	
    return(
    	<div className="card">



     	<nav className="navbar navbar-default" role="navigation">
	  		<div className="container-fluid">
		    	<div className="collapse navbar-collapse">
		      	<ul className="nav navbar-nav">
		      		{this.props.items.map(function(item) {
		      			return <NavbarItem activeRoute={activeRoute} text={item.text} href={item.href} />
		      		})}
		      	</ul>
		    	</div>
	  		</div>
			</nav>
    )
  }
}

