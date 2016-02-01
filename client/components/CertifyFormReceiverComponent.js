'use strict'

/*
  Component that lets user look up who they want to certify 
*/

// Globals
import _ from 'lodash'
import React, { Component, dispatch, PropTypes } from 'react'

import CardComponent from '../components/CardComponent'

class CertifyFormReceiverComponent extends Component {
  
  render() {
    
    let usernameSearchResults = this.props.certifyPerson.receiverUsernameSearchResults || []
    usernameSearchResults = usernameSearchResults.completions || []
  
    // Not using use redux-form for receiver field because need
    // to get onChange events from receiver input
    return (  
      <div className="certify-form-receiver">

          <div className="label-input">
            <h1>Who do you want to certify?</h1>

            <input 
              type="text" 
              onChange={this.props.usernameChanged.bind(this)} 
              placeholder="keybase username" />
          </div>
              
          <div className="results">
            {_.map(_.slice(usernameSearchResults, 0, 8), user => {
              let name = user.components.username.val
              let icon = user.thumbnail
              return (
                <div className="search-result-user-card">
                  <CardComponent key={name} title={name} icon={icon}/>
                </div>
                )
            })}
          </div>
      </div>
    )
  }
}

CertifyFormReceiverComponent.propTypes = {
  usernameSearchResults: PropTypes.object,
  usernameChanged: PropTypes.func
}

export default CertifyFormReceiverComponent
