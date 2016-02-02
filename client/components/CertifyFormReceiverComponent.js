'use strict'

/*
  Component that lets user look up who they want to certify 
*/

// Globals
import _ from 'lodash'
import React, { Component, dispatch, PropTypes } from 'react'

import CardComponent from '../components/CardComponent'

class SearchResults extends Component {
  render() {
    let usernameSearchResults = this.props.certifyPerson.receiverUsernameSearchResults || []
    usernameSearchResults = usernameSearchResults.completions || []

    return (
      <div className="results">
        {_.map(_.slice(usernameSearchResults, 0, 8), user => {
          let name = user.components.username.val
          let icon = user.thumbnail
          let usernameSearchResultClicked = this.props.usernameSearchResultClicked
          return (
            <div key={name} className="search-result-user-card" 
              onClick={function() {usernameSearchResultClicked(name)}}>
              <CardComponent title={name} icon={icon}/>
            </div>
            )
        })}
      </div>
      )
  }
}

SearchResults.propTypes = {
  usernameSearchResults: PropTypes.object.isRequired
}

class SelectedReceiver extends Component {
  render() {
    let receiver = this.props.receiver
    let usernameSearchResults = this.props.certifyPerson.receiverUsernameSearchResults || []
    usernameSearchResults = usernameSearchResults.completions || []
    let icon = _.find(usernameSearchResults, function(user) {
      return user.components.username.val === receiver
    }).thumbnail

    return (
    <div className="selected-receiver">
      <CardComponent title={''} icon={icon} />
    </div>
    )
  }
}

SelectedReceiver.propTypes = {
  selectedReceiver: PropTypes.string.isRequired,
  usernameSearchResults: PropTypes.object.isRequired
}

class CertifyFormReceiverComponent extends Component {
  
  render() {  
    // render search results or selected receiver
    let receiverComponent = this.props.receiverIsSelected
    ? (<SelectedReceiver {...this.props} />)
    : <SearchResults {...this.props} />

    // apply class once a receiver is selected
    let inputClass = this.props.receiverIsSelected
    ? 'input-selected' : ''

    let label = this.props.receiverIsSelected
    ? 'Certifying' : 'Who do you want to certify?'

    // Not using use redux-form for receiver field because need
    // to get onChange events from receiver input
    return (  
      <div className="certify-form-receiver">

          <div className="label-input">
            <h1>{label}</h1>

            <input 
              type="text" 
              className={inputClass}
              onChange={this.props.receiverChanged.bind(this)}
              value={this.props.receiver}
              placeholder="keybase username" />
          </div>

          {receiverComponent}  

      </div>
    )
  }
}

CertifyFormReceiverComponent.propTypes = {
  usernameChanged: PropTypes.func.isRequired,
  selectedReceiver: PropTypes.isRequired // can be null or a string
}

export default CertifyFormReceiverComponent
