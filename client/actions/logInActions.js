'use strict'

import assert from 'assert'
import fetch from 'isomorphic-fetch'

import { ENDPOINTS } from './../constants/endpoints'
import { 
  LOG_IN_START,
  LOG_IN_SUCCESS,
  LOG_IN_ERROR 
} from './../constants/actionTypes'
import * as ERRORS from './../constants/errorTypes'

import { setAppError, unsetAppError } from './appErrorActions'
import { fJSON, fPost } from './../utils/api'


// LOG_IN Action Creators

export function loginStart(data) {
  return {
    type: LOG_IN_START,
    payload: data.username
  }
}

export function loginSuccess(data) {
  return {
    type: LOG_IN_SUCCESS,
    payload: data
  }
}

export function loginError(err) {
  return {
    type: LOG_IN_ERROR,
    payload: err,
    error: true
  }
}

// Action creator. Returns a function of dispatch. This is the pattern
// when using thunk middleware for dispatching async actions.
export function login(username, password) {
  const payload = {
    username: username,
    password: password
  }

  // return a function that takes a dispatch object
  return (dispatch) => {
    dispatch(loginStart(payload))
    dispatch(unsetAppError(ERRORS.LOG_IN))

    return fPost(ENDPOINTS.LOG_IN, payload)
      .then(fJSON)
      .then((currentUser) => {
        dispatch(loginSuccess(currentUser))
      })
      .catch((err) => {
        dispatch(logInError(err))
        dispatch(setAppError(err, ERRORS.LOG_IN))
      })
  }
}
