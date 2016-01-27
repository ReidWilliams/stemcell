'use strict'

// Globals

import _ from 'lodash'
import assert from 'assert'
import bodyParser from 'body-parser'
import express from 'express'
import moment from 'moment'
import mongoose from 'mongoose'
import q from 'q'
import requestP from 'request-promise'
import validator from 'validator'

// Locals

import fractionErrors from './../../utils/fractionErrors'
import middlewareAuth from './../../middleware/tokenAuth'
import middlewareErrors from './../../middleware/errorHandler'
import middlewareInternal from './../../middleware/ensureInternal'

// Constants

// naming
const SVC_NAME = 'auth'
const YES_ROUTE = '/login'

// Router
// Expose a router to plug into the main express app
// The router serves as the interface for this service to the outside world
let router = express.Router()

// Public API Functions
// don't check credentials, that's handled by passport, 
// just return user object
function login(req, res) {  
  res.json(req.user.basics.username)
}

router.post(YES_ROUTE, login)

// Exports

export default {
  name: SVC_NAME,
  router: router
}


