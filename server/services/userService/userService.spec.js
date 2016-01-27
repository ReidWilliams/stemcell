'use strict'

import strategy from '../keybasePassportStrategy'

let validUser = {username: 'tkodev', password: 'IDEObitsblocks'}
let invalidUser = {username: 'blahhblah', password: 'blahblahblah'}

let strategyCallback = strategy.strategyCallback

describe('Keybase Passport Strategy', () => {

	it('should return a valid user object with a correct username password', (done) => {
		strategyCallback(validUser.username, validUser.password, (err, user) => {
			expect(user.basics.username).toBe('tkodev')
			done()
		})
	}, 15000)

	it('should ', (done) => {
		strategyCallback(invalidUser.username, invalidUser.password, (err, response) => {
			expect(response).toBe(false)
			done()
		})
	}, 15000)
})

