'use strict'

/* 
	Simple horizontal navigation bar that uses bootstrap navbar classes. You'll want to include
	the bootstrap css or write your own css classes with the same names.
	Expects props.items to be a list of navigation items. It should look like this:
	props.items = [
			{
				text: 'About'
				href: '/about'
			},
			{
				text: 'Home',
				href: '/'
			}
		]
	Also expects props.activeRoute to equal one of the items' hrefs.	
*/

// Globals
import React, { Component } from 'react'
import { Link } from 'react-router'

class NavbarItem extends Component {
	render() {
		let activeClass = (this.props.activeRoute === this.props.href)? "active" : "inactive"
		console.log(this.props.active)
		return (
			<li className={activeClass}>
				<Link to={this.props.href}>
				{this.props.text}
				</Link>
			</li>
		)
	}
}

export default class NavbarComponent extends Component {
  render() {
  	let activeRoute = this.props.activeRoute
    return(
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

