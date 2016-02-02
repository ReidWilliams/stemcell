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
            <h1>CERTIFY ANYONE FOR ANYTHING</h1>  
            <h2>Certify anything big or small, from sharing the secrets of a good martini to recommending your best music student</h2>`
          </div>
          <div className="col-md-6">
            <img src="/public/assets/images/home/sash_fill.png" className="img-responsive center-block" style={imgStyle}></img>
          </div>
        </div>
      </div>
    )
  }
}
