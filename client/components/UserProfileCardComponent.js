'use strict'

// Globals
import React, { Component } from 'react'

export default class UserProfileCardComponent extends Component {
  render() {
    // debugger
    let firstName = this.props.currentUser.firstName
  	
    return(
    	<div className="profile-card">
  			<div className="text">
  				<h1>Hi {firstName}</h1>
          <p>You&#39;re awesome and these certifications prove it</p>
  			</div>
    	</div>
    )
  }
}

