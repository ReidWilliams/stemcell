'use strict'

// Globals
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'


export default class appContainer extends Component {
  render() {
    return(
    	// EXPLAIN why this.props.children here
      <div>
        {this.props.children}
      </div>
    )
  }
}
