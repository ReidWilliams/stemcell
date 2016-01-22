'use strict'

// Globals
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

import LandingPart1 from './LandingPart1'
import NavbarContainer from './navbarContainer'

export default class LandingContainer extends Component {
  render() {
    return (
      <div>
        <NavbarContainer/> 
        <LandingPart1/>
      </div>
    )
  }
}
