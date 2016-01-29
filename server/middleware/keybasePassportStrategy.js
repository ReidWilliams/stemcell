'use strict'

/*
	Returns a passport local strategy that uses provided username and password
    to log into	keybase.io.
	*/


// GLOBAL
import { default as Keybase } from 'node-keybase'

let keybase = new Keybase()
    // keybase = new (Keybase);

// pass this to a call to passport local strategy constructor
let strategyCallback = function(username, password, done) {
    keybase.login(username, password, function(err, result) {
      if (!result.status) {
        console.log('keybase error')
        console.log(result)
        return done(null, false)
      }
      if (result.status.code !== 0) {
        return done(null, false)
      }

      let user = result.me;
      return done(null, user)
    });
}

let serializeUser = function(user, done) {
  done(null, user.basics.username)
} 

let deserializeUser = function(username, done) {
  keybase.user_lookup({usernames: [username]}, function (err, result) {
    done(err, result.them[0]);
  })
}

export default {
  strategyCallback: strategyCallback,
  serializeUser: serializeUser,
  deserializeUser: deserializeUser
}