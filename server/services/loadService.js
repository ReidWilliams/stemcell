'use strict'

/*
  Loads a service module onto an express app
  */

// Globals
import _ from 'lodash'
import assert from 'assert'

// Initial service api url base
const API_BASE_V1 = '/api/v1'

export let loadService = function(app, service) {
  // TODO: better sanity checks with validator!
  assert(typeof service.name === 'string')
  assert(service.name.indexOf('/') === -1) // no slashes in name
  assert(typeof service.router === 'function')
  assert(app && _.isObject(app))

  let route = API_BASE_V1 + '/' + service.name
  app.use(route, service.router)
  console.log('LOADED: ' + service.name.toUpperCase() + ' SERVICE AT ' + route)
}

export let loadServiceWithMiddleware = function(app, middleware, service) {
  assert(typeof service.name === 'string')
  assert(service.name.indexOf('/') === -1) // no slashes in name
  assert(typeof service.router === 'function')
  assert(app && _.isObject(app))

  let route = API_BASE_V1 + '/' + service.name
  app.use(route, [middleware, service.router])
  console.log('LOADED: ' + service.name.toUpperCase() + ' SERVICE AT ' + route)
}

export let loadServiceEnsureAuthenticated = function(app, service) {
  assert(typeof service.name === 'string')
  assert(service.name.indexOf('/') === -1) // no slashes in name
  assert(typeof service.router === 'function')
  assert(app && _.isObject(app))

  let route = API_BASE_V1 + '/' + service.name
  app.use(route, [ensureAuthenticated, service.router])
  console.log('LOADED: ' + service.name.toUpperCase() + ' SERVICE AT ' + route)
}

let ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated) {
    return next()
  } else {
    res.send(401)
  }
}




