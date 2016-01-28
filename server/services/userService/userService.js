'use strict'

// Globals

import express from 'express'

// Constants

// naming
const SVC_NAME = 'user'
const USER = ''

// Router
// Expose a router to plug into the main express app
// The router serves as the interface for this service to the outside world
let router = express.Router()

// Public API Functions
// ensuring authentication handled outside this module
let getUser = function(req, res) {  
	console.log(req.user.basics)
  res.json(req.user.basics)
}

router.get(USER, getUser)

// Exports

export default {
  name: SVC_NAME,
  router: router
}


