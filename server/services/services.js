// Globals
import _ from 'lodash'
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local' 
import session from 'express-session'

// Locals
import { loadService, loadServiceWithMiddleware } from './loadService'

import yes from './yes/yesService'
import auth from './authService/authService'
import keybaseStrategy from '../middleware/keybasePassportStrategy'

/*
	Construct app by importing service modules and calling loadService.
	Important: body parsing is already set up in app.js
	*/

export default function (app) {

	// Set up passport to use our keybase local strategy

	passport.use(new LocalStrategy(keybaseStrategy.strategyCallback))
	passport.serializeUser(keybaseStrategy.serializeUser)
	passport.deserializeUser(keybaseStrategy.deserializeUser)

	// Set up Passport as app middleware
	// FIXME: make tedkotest a config variable
	app.use(session({ secret: 'tedkotest', resave: false, saveUninitialized: true })); // session secret
	app.use(passport.initialize())
	app.use(passport.session())
	
	let passportMiddleware = passport.authenticate('local')
	loadServiceWithMiddleware(app, passportMiddleware, auth)
}