'use strict'

import Parse from 'parse/node'
import q from 'q'
import _ from 'lodash'


import parseInit from '../../config/parseTokens'
parseInit(Parse)

// returns q promise that resolves to list of certifications
export let getCertifications = function(username) {
	let deferred = q.defer()

	let userQuery = new Parse.Query(Parse.User)
	userQuery.equalTo("username", username)

	let Certification = Parse.Object.extend('Certification');
	let certQuery = new Parse.Query(Certification);
	certQuery.matchesQuery('receiverUsername', userQuery)

	certQuery.find().then((objs) => {
		let certs = _.map(objs, (c) => {
			return {
				title: c.get('title'),
				description: c.get('description'),
				sender: c.get('senderUsername')
			}
		})
		deferred.resolve(certs)
	}, function(err) {
		console.log(err)
		deferred.reject(err)
	})

	return deferred.promise
}

