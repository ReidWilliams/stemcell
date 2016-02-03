'use strict'

// Globals

import express from 'express'
import assert from 'assert'

import { getCertifications, createCertification, getOrCreateUser } from './userServiceDB'

// Constants

// naming
const SVC_NAME = 'user'
const USER = ''
const CERTIFY = '/certify'

// Router
// Expose a router to plug into the main express app
// The router serves as the interface for this service to the outside world
let router = express.Router()

// Public API Functions
// ensuring authentication handled outside this module
let getUser = function(req, res) {  
	console.log(req.user.basics)
	let username = req.user.basics.username
	let name = req.user.profile.full_name
	let firstName = ''
	let lastName = ''
	if (name) {
		let names = name.split(' ')
		firstName = names[0] || ''
		lastName = names[1] || ''
	}

	console.log('names from keybase are' + firstName + ' ' + lastName)
	let payload = {}

	getOrCreateUser(username, firstName, lastName).then((details) => {
		// user db's first and last names b/c we can override what key base has
		payload.firstName = details.firstName
		payload.lastName = details.lastName
	}).then(() => {
		return getCertifications(username)
	}).then((certs) => {
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

let certifySomeone = function(req, res) {
	console.log('in certify someone')
	createCertification(req.user.basics.username, req.body).then(function() {
		res.json(true)
	}).catch(function(err) {
		console.log(err)
		res.status(500)
		res.send(err)
	})
}

router.get(USER, getUser)
router.post(CERTIFY, certifySomeone)

// Exports

export default {
  name: SVC_NAME,
  router: router
}


