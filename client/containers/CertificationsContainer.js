'use strict'

// Globals
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router'

// Locals
import * as actions from './../actions/userActions'
import CertificationCardComponent from '../components/CertificationCardComponent'

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.data,
    appErrors: state.appErrors,
  }
}


function mapDispatchToProps(dispatch) {
  return {
  	fetchContainerData: () => {
  		dispatch(actions.currentUserFetch())
  	}
  }
}


class CertificationsContainer extends Component {
	componentWillMount() {
		this.props.fetchContainerData()
	}

  render() {
    return(
      <div>
        <h1>Your Dashboard</h1>
        <h3>This is a protected route</h3>
        <hr/>
        <br/>
        <br/>

        <div className="container">
          <div className="row">
            
            {this.props.currentUser.certifications.map((cert) => {
              return (
                <div className="col-md-3">
                  <CertificationCardComponent title={cert.title} description={cert.description} sender={"from " + cert.sender} />
                </div>
              )
            })}
              
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CertificationsContainer)


// <p>You can really only <Link to="/logout">log out</Link>...</p>