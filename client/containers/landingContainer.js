'use strict'

// Globals
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

import LandingContainer1 from './landingContainer1'
import NavbarContainer from './navbarContainer'

export default class LandingContainer extends Component {
  render() {
    return (
      <div>
        <NavbarContainer/> 
        <LandingContainer1/>
      </div>
    )
  }
}
