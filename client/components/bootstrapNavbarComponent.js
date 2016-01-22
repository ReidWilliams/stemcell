'use strict'

// Globals
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

class NavbarItem extends Component {
	render() {
		let activeClass = (this.props.active)? "active" : "inactive";
		return (
			<li className={activeClass}><a href={this.props.href}>{this.props.text}</a></li>
		)
	}
}

export default class NavbarComponent extends Component {
  render() {
  	let items = [
  		{ text: "FOO",
  			href: "/",
  			active: true
  		},
  		{	text: "BAR",
  			href: "http://ideo.com",
  			active: false
  		}];
    return(
     	<nav className="navbar navbar-default" role="navigation">
	  		<div className="container-fluid">
		    	<div className="collapse navbar-collapse">
		      	<ul className="nav navbar-nav">
		      		{items.map(function(item) {
		      			return <NavbarItem active={item.active} text={item.text} href={item.href} />
		      		})}
		      	</ul>
		    	</div>
	  		</div>
			</nav>
    )
  }
}

