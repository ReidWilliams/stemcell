'use strict'

// Globals
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router'

// Locals
import * as actions from './../actions/userActions'
import CardComponent from '../components/CardComponent'

class CertificationCardsContainer extends Component {
  render() {
    return(
        <div className="container">
          <div className="row">
            
            {this.props.currentUser.certifications.map((cert) => {
              return (
                <div className="col-md-3">
                  <CardComponent title={cert.title} description={cert.description} sender={"from " + cert.sender} />
                </div>
              )
            })}
              
          </div>
        </div>
    )
  }
}

export default CertificationCardsContainer


// <p>You can really only <Link to="/logout">log out</Link>...</p>