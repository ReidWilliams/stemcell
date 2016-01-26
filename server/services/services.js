// Globals
import _ from 'lodash'

// Locals
import loadService from './loadService'

import yes from './yes/yesService'

/*
	Construct app by importing service modules and calling loadService.
	*/

let appServices = [yes]

export default function (app) {
	_.each(appServices, service => { loadService(app, service) })
}