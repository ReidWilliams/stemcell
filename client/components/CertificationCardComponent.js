'use strict'

// Globals
import React, { Component } from 'react'

export default class CertificationCardComponent extends Component {
  render() {
  	
    return(
    	<div className="certification-card">
    		<div className="icon"></div>
  			<div className="text">
  				<div className="title"><h1>{this.props.title}</h1></div>
  				<div className="detail"><p>{this.props.description}</p></div>
  				<div className="sender"><p>{this.props.sender}</p></div>
  			</div>
    	</div>
    )
  }
}

