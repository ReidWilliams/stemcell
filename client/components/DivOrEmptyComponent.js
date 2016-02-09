'use strict'

/*
  Renders as div component or empty depending on props. Helps you build components
  with tags (or components) written inline that render conditionally without 
  writing additional javascript.
  */

// Globals
import React, { Component } from 'react'

export default class DivOrEmpty extends Component {
  render() {
    if (this.props.condition) {
      return (<div className={this.props.divClass}>{this.props.children}</div>)
    } else {
      return false
    }
  }
}

