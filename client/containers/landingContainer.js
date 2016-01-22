'use strict'

// Globals
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

import LandingPart1 from './LandingPart1'
import NavbarComponent from './../components/bootstrapNavbarComponent'

export default class LandingContainer extends Component {
  render() {
    return (
      <div>
        <NavbarComponent/> 
        <LandingPart1/>
      </div>
    )
  }
}
