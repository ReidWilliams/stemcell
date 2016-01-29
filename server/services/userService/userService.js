'use strict'

// Globals

import express from 'express'

import { getCertifications } from './userServiceDB'

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
	let username = req.user.basics.username
	let payload = {}

	getCertifications(username).then((certs) => {
		payload.username = username
		payload.certifications = certs
		res.json(payload)
	}).catch((err) => {
		console.log('error fetching user certificates:')
		console.log(err)
		res.status(500);
		res.send('error fetching user certificates');
	})
}

router.get(USER, getUser)

// Exports

export default {
  name: SVC_NAME,
  router: router
}


