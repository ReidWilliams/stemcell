'use strict'

import { getCertifications, getOrCreateUser, deleteUser, getUserOrEmpty } from '../userServiceDB'

let validUser = {username: 'tkodev', firstName: 'Ted', lastName: 'Ko'}
let testUser = {username: 'test_6847647694764756947694', firstName: 'Testy', lastName: 'Test'}

describe('User service', () => {

	it('should return a valid certification from the db', (done) => {
		getCertifications(validUser.username).then((certs) => {
			expect(certs[0].title).toBe('Nice!')
			expect(certs[0].sender).toBe('Reid Williams')
			done()
		}).catch((err) => {
			console.log(err)
		})
	}, 15000)

	it('should return valid user details for existing user', (done) => {
		getOrCreateUser(validUser.username, validUser.firstName, validUser.lastName).then((user) => {
			expect(user.firstName).toBe('Ted')
			done()
		}).catch((err) => {
			console.log(err)
		})
	}, 15000)

	it('should return empty for non-existent user and create with getOrCreateUser, successfully delete user', function(done) {
		getUserOrEmpty(testUser.username).then(function(obj) {
			expect(obj).toBe(undefined)
			return getOrCreateUser(testUser.username, testUser.firstName, testUser.lastName)
		}).then(function(user) {
			expect(user.firstName).toBe('Testy')
			return deleteUser(testUser.username)
		}).then(function() {
			return getUserOrEmpty(testUser.username)
		}).then(function(obj) {
			expect(obj).toBeUndefined()
			done()
		})
	}, 15000)
})