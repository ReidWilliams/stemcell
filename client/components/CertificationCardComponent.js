'use strict'

// Globals
import React, { Component } from 'react'

export default class CertificationCardComponent extends Component {
  render() {
  	
    return(
    	<div className="certification-card">
    		<div className="icon"></div>
  			<div className="text">
  				<div className="header">Amazing</div>
  				<div className="detail">What an amazing design</div>
  				<div className="sender">from Ted Ko</div>
  			</div>
    	</div>
    )
  }
}

