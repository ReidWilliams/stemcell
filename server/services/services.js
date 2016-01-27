// Globals
import _ from 'lodash'
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local' 
import session from 'express-session'

// Locals
import { loadService, loadServiceWithMiddleware } from './loadService'

import yes from './yes/yesService'
import keybaseStrategy from '../middleware/keybasePassportStrategy'

/*
	Construct app by importing service modules and calling loadService.
	*/

export default function (app) {

	// Set up passport to use our keybase local strategy

	passport.use(new LocalStrategy(keybaseStrategy.strategyCallback))
	passport.serializeUser(keybaseStrategy.serializeUser)
	passport.deserializeUser(keybaseStrategy.deserializeUser)

	// Passport as app middleware
	app.use(session({ secret: 'tedkotest', resave: false, saveUninitialized: true })); // session secret
	app.use(passport.initialize())
	app.use(passport.session())
	
	let passportMiddleware = passport.authenticate('local')
	loadServiceWithMiddleware(app, passportMiddleware, yes)
}