'use strict'

/*
  Loads a service module onto an express app
  */

// Globals
import _ from 'lodash'
import assert from 'assert'

// Initial service api url base
const API_BASE_V1 = '/api/v1'

export default function (app, service) {
  // TODO: better sanity checks with validator!
  assert(typeof service.name === 'string')
  assert(service.name.indexOf('/') === -1) // no slashes in name
  assert(typeof service.router === 'function')
  assert(app && _.isObject(app))

  let route = API_BASE_V1 + '/' + service.name;
  app.use(route, service.router)
  console.log('LOADED: ' + service.name.toUpperCase() + ' SERVICE AT ' + route)
}
