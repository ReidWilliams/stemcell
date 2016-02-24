'use strict'

import assert from 'assert'
import _ from 'lodash'
import q from 'q'

import { history } from '../config/history'

export function fJSON(response) {
  assert(_.isObject(response))
  
  return response.json()
    .catch((err) => {
      const formattedError = {
        message: 'Unexpected network error',
        status: response.status
      }
      return Promise.reject(formattedError)
    })
    .then((json) => {
      if (!response.ok) {
        return Promise.reject(json)
      }
      return Promise.resolve(json)
    })
}

export function fPost(url, body) {
  assert(_.isString(url))
  assert(_.isObject(body))
  return window.fetch(url, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    credentials: 'same-origin'
  })
}

export function fGet(url) {
  assert(_.isString(url))
  return window.fetch(url, {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin'
  })
}

export function fGetExternal(url) {
  assert(_.isString(url))
  return window.fetch(url, {
    method: 'get'
  })
}

// Confirm.io Auth request
export function confirmPostAuth()  {
  return window.fetch('https://api.confirm.io/v1/auth', {
    method: 'post',
    headers: {
      Authorization: '52029082-649f-4715-bacf-5e1048ec96f1'
    },
    credentials: '52029082-649f-4715-bacf-5e1048ec96f1'
  })
}

// Confirm.io IDs Request
export function confirmPostIds(front, back) {
  var payload = {
    frontImage: front
    backImage: back
  }
  return window.fetch('https://api.confirm.io/v1/ids', {
    method: 'post',
    headers: {
      Authorization: '52029082-649f-4715-bacf-5e1048ec96f1',
      'Content-Type': 'multipart/form-data',
    },
    body: 
  })
}

/*
  Returns a function that consumes an http response and redirects
  if the response matches a given HTTP error code. For example, 
  you might use this to redirect to /login given HTTP error 401.
  401 means unauthorized user.
  */
export function redirectOnError(errorCode, redirectPath) {
  let redirect = function(res) {
    if (res.status === errorCode) {
      history.replaceState(null, redirectPath)
      return q.reject(errorCode)
    }
    
    return q(res) 
  }
  return redirect
}