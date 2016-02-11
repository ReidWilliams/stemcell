'use strict'

/*
  Multi purpose card component with optional icon or image on top and header, middle, footer.
  */

// Globals
import React, { Component, PropTypes } from 'react'

import DivOrEmpty from './DivOrEmptyComponent'

class CardComponent extends Component {
  render() {
  	
    return(
    	<div className="card-component">
    		<div className="icon">
          <DivOrEmpty condition={(this.props.icon !== '')}><img src={this.props.icon}/>
          </DivOrEmpty>
        </div>
  			<div className="text">
  				<div className="header"><h1>{this.props.header}</h1></div>
  				<div className="middle"><p>{this.props.middle}</p></div>
  				<div className="footer"><p>{this.props.footer}</p></div>
  			</div>
    	</div>
    )
  }
}


CardComponent.propTypes = {
  icon: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  middle: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
}

export default CardComponent