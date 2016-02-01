'use strict'

// Globals

import _ from 'lodash'
import assert from 'assert'
import bodyParser from 'body-parser'
import express from 'express'

// Locals

import fractionErrors from './../../utils/fractionErrors'
import middlewareAuth from './../../middleware/tokenAuth'
import middlewareErrors from './../../middleware/errorHandler'
import middlewareInternal from './../../middleware/ensureInternal'

// Constants

// naming
const SVC_NAME = 'yes'

const YES_ROUTE = '/'

// Router

// Expose a router to plug into the main express app
// The router serves as the interface for this service to the outside world
let router = express.Router()


// Middleware

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
router.use(bodyParser.json())


// Public API Functions
// yes always returns yes
function yes(req, res) {  
  res.json('yes')
}

router.all(YES_ROUTE, yes)

// Exports

export default {
  name: SVC_NAME,
  router: router
}


