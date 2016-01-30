'use strict'

// Globals
import React, { Component } from 'react'

import DivOrEmpty from './DivOrEmptyComponent'

export default class CardComponent extends Component {
  render() {
  	
    return(
    	<div className="card-component">
    		<div className="icon">
          <DivOrEmpty condition={this.props.icon}><img src={this.props.icon}/>
          </DivOrEmpty>
        </div>
  			<div className="text">
  				<div className="title"><h1>{this.props.title}</h1></div>
  				<div className="detail"><p>{this.props.description}</p></div>
  				<div className="sender"><p>{this.props.sender}</p></div>
  			</div>
    	</div>
    )
  }
}

