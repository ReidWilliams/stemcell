'use strict'

var Q = require('Q')

// var p = Q('resolved')
// .then(function(x) {
// 	console.log(x)
// 	return Q('resolved2')
// }).then(function(x) {
// 	console.log(x)
// 	return Q('resolved3')
// }).then(function(x) {
// 	console.log(x)
// 	return Q()
// }).catch(function(x) {
// 	console.log('catching')
// 	console.log(x)
// })



var p = Q('resolved')
.then(function(x) {
	console.log(x)
	return Q('resolved2')
}).then(function(x) {
	console.log(x)
	return Q.reject('rejected instead of resolved3')
}).then(function(x) {
	console.log(x)
	return Q()
}).catch(function(x) {
	console.log('catching')
	console.log(x)
})