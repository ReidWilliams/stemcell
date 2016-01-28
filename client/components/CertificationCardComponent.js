'use strict'

// Globals
import React, { Component } from 'react'

export default class CertificationCardComponent extends Component {
  render() {
  	
    return(
    	<div className="certification-card">
    		<div className="icon"></div>
  			<div className="text">
  				<div className="title"><h1>Awesome</h1></div>
  				<div className="detail"><p>What an amazing design, yep, lorem ipsum dolores getting longer</p></div>
  				<div className="sender"><p>from Ted Ko</p></div>
  			</div>
    	</div>
    )
  }
}

