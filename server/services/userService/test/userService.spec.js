'use strict'

import { getCertifications } from '../userServiceDB'

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
})