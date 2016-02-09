'use strict'

// System Dependencies
import express from 'express'
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'
import path from 'path'
import q from 'q'
import webpack from 'webpack'
import winston from 'winston'
import url from 'url'

// Local Dependencies
// Note: always bring the config in first
import config from './server/config/config'
import loadServices from './server/services/services'

import webpackConfig from './webpack.config'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackMiddlewareConfig from './webpackMiddleware.config'


// Route normalization
const CLIENT_PATH = path.join(__dirname + '/client')
const ASSETS_PATH = path.join(__dirname + '/client/assets')
const SERVICES_PATH = path.join(__dirname + '/server/services')


// Create the app
let app = express()


// TODO: ADD CSP AND CLEANER CORS SUPPORT
// TODO: ADD CSP AND CLEANER CORS SUPPORT
// TODO: ADD CSP AND CLEANER CORS SUPPORT
app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*")
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// Middleware

// FIXME: add tests to make sure app has body parsers loaded
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

// Build webpack comiler based on webpack config
let webpackCompiler = webpack(webpackConfig)
// Attach webpack-dev-middleware and webpack-hot-middleware
app.use(webpackDevMiddleware(webpackCompiler, webpackMiddlewareConfig.DEV))
app.use(webpackHotMiddleware(webpackCompiler, webpackMiddlewareConfig.HOT))


// Load API Routes
loadServices(app)


// Handle static files
app.use('/assets', express.static(ASSETS_PATH))

// Handle client routes
let sendClient = (res) => {
  return res.sendFile(path.join(CLIENT_PATH + '/index.html'))
}

// // FIXME: consolidate these and in client routing. We're specifying routes in too many places.
app.get('/', (req, res) => { sendClient(res) })
app.get('/me', (req, res) => { sendClient(res) })
app.get('/login', (req, res) => { sendClient(res) })
app.get('/certify', (req, res) => { sendClient(res) })


// Export our app instance to start from the appropriate point
module.exports = app
