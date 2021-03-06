'use strict'

// Globals
import React, { Component } from 'react'

export default class UserProfileCardComponent extends Component {
  render() {
    let firstName = this.props.currentUser.firstName
    let subTitle = this.props.subTitle
  	
    return(
    	<div className="profile-card">
  			<div className="text">
  				<h1>Hi {firstName}</h1>
          <p>{subTitle}</p>
  			</div>
    	</div>
    )
  }
}

