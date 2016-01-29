'use strict'

import { getCertifications, getUserDetails } from '../userServiceDB'

let validUser = {username: 'tkodev'}

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

	it('should return valid user details', (done) => {
		getUserDetails(validUser.username).then((user) => {
			expect(user.firstName).toBe('Ted')
			done()
		}).catch((err) => {
			console.log(err)
		})
	}, 15000)
})