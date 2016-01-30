'use strict'

/*
  Renders as div component or empty depending on props
  */

// Globals
import React, { Component } from 'react'

export default class DivOrEmpty extends Component {
  render() {
    if (this.props.condition !== undefined) {
      return (<div className={this.props.divClass}>{this.props.children}</div>)
    } else {
      return false
    }
  }
}

