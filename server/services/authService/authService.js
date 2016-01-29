'use strict'

// Globals

import express from 'express'

// Constants

// naming
const SVC_NAME = 'auth'
const LOGIN = '/login'

// Router
// Expose a router to plug into the main express app
// The router serves as the interface for this service to the outside world
let router = express.Router()

// Public API Functions
// don't check credentials, that's handled by passport, 
// just return true
export let login = function(req, res) {  
  res.json(true)
}

router.post(LOGIN, login)

// Exports

export default {
  name: SVC_NAME,
  router: router
}


