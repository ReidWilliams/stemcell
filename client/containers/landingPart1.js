'use strict'

// Globals
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'


export default class LandingPart1 extends Component {
  render() {
    let imgStyle = {
      width: 'auto',
      height: 'auto'
    }

    return(
      <div className="container1">
        <div className="row">
          <div className="col-md-6">
            <h1>KEEP ALL OF YOUR BADGES IN A SAFE PLACE.</h1>  
            <h2>The Bits + Blocks coLAB is putting your professional certifications on the blockchain.</h2>`
          </div>
          <div className="col-md-6">
            <img src="/public/assets/images/home/sash_fill.png" className="img-responsive center-block" style={imgStyle}></img>
          </div>
        </div>
      </div>
    )
  }
}
