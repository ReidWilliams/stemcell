'use strict'

import Parse from 'parse/node'
import q from 'q'
import _ from 'lodash'
import assert from 'assert'

import parseInit from '../../config/parseTokens'
parseInit(Parse)
Parse.Cloud.useMasterKey()

// returns plain object with fields we care about
export let parseUserToPlainObject = function(parseUserObj) {
	let user = {}
	user.firstName = parseUserObj.get('firstName')
	user.lastName = parseUserObj.get('lastName')
	user.username = parseUserObj.get('userName')
	return user
}

// This will be a validated keybase username
export let getOrCreateUser = function(username, firstName, lastName) {
	assert(username, 'username was empty')
	let deferred = q.defer()

	let userQuery = new Parse.Query(Parse.User)
	userQuery.equalTo('username', username)
	userQuery.first().then((obj) => {
		if (obj) {
			let user = parseUserToPlainObject(obj)
			deferred.resolve(user)
		} else {
			let userObj = new Parse.User()
			userObj.set('firstName', firstName)
			userObj.set('lastName', lastName)
			userObj.set('username', username)
			userObj.set('password', ' ')
			userObj.save().then(function(saved) {
				let user = parseUserToPlainObject(saved)
				deferred.resolve(user)
			}, function(err) {
				console.log(err)
				deferred.reject(err)
			})
		}
	}, (err) => {
		console.log(err)
		deferred.reject(err)
	})

	return deferred.promise
}

export let deleteUser = function(username) {
	assert(username, 'username was empty')
	let deferred = q.defer()

	let userQuery = new Parse.Query(Parse.User)
	userQuery.equalTo('username', username)
	userQuery.first().then((obj) => {
		if (obj) {
			obj.destroy().then(function() {
				deferred.resolve()
			}, function(err) {
				console.log(err)
				deferred.reject(err)
			})
		} else {
				console.log('WARNING, called destory on non-existent parse user object: ' + username)
				deferred.resolve()
		}
	}, (err) => {
		console.log(err)
		deferred.reject(err)
	})

	return deferred.promise
}


// returns q promise that resolves to list of certifications
export let getCertifications = function(username) {
	let deferred = q.defer()

	let userQuery = new Parse.Query(Parse.User)
	userQuery.equalTo("username", username)

	let Certification = Parse.Object.extend('Certification');
	let certQuery = new Parse.Query(Certification);
	certQuery.matchesQuery('receiverUsername', userQuery)
	certQuery.include('senderUsername')

	certQuery.find().then((objs) => {
		let certs = _.map(objs, (c) => {
			let sender = c.get('senderUsername')
			return {
				title: c.get('title'),
				description: c.get('description'),
				sender: sender.get('firstName') + ' ' + sender.get('lastName')
			}
		})
		deferred.resolve(certs)
	}, function(err) {
		console.log(err)
		deferred.reject(err)
	})

	return deferred.promise
}

export let createCertification = function(sender, object) {
	console.log(object)
	let { title, description, receiver } = object
	let deferred = q.defer()
	let senderObj
	let receiverObj
	let Certification = Parse.Object.extend('Certification');

	getUserOrEmpty(sender).then(function(obj) {
		senderObj = obj
	}).then(function() {
		return getUserOrEmpty(receiver)
	}).then(function(obj) {
		receiverObj = obj
	}).then(function() {
		let Certification = Parse.Object.extend('Certification');

		console.log('create serv')
		console.log(senderObj)
		console.log(receiverObj)
		console.log(title)

		let newCert = new Certification()
		newCert.set('title', title)
		newCert.set('description', description)
		newCert.set('receiverUsername', receiverObj)
		newCert.set('senderUsername', senderObj)
		return newCert.save()
	}).then(function(saved) {
		deferred.resolve()
	}, function(err) {
		console.log(err)
		deferred.reject(err)
	})

	return deferred.promise
}

// returns parse user or undefined
export let getUserOrEmpty = function(username) {
	let deferred = q.defer()

	let userQuery = new Parse.Query(Parse.User)
	userQuery.equalTo("username", username)
	userQuery.first().then((obj) => {
		deferred.resolve(obj)
	}, (err) => {
		console.log(err)
		deferred.reject(err)
	})

	return deferred.promise
}



