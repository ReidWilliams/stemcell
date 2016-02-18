'use strict'

import { ENDPOINTS } from './../constants/endpoints'
import { 
  LOG_OUT_START,
  LOG_OUT_SUCCESS,
  LOG_OUT_ERROR 
} from './../constants/actionTypes'
import * as ERRORS from './../constants/errorTypes'

import { setAppError, unsetAppError } from './appErrorActions'
import { fJSON, fPost, redirectOnError } from './../utils/api'

// LOG_IN Action Creators

export function logoutStart() {
  return {
    type: LOG_OUT_START
  }
}

export function logoutSuccess(data) {
  return {
    type: LOG_OUT_SUCCESS,
    payload: data
  }
}

export function logoutError(err) {
  return {
    type: LOG_OUT_ERROR,
    payload: err,
    error: true
  }
}

export function logoutUser() {
  return (dispatch) => {
  	const logoutUrl = ENDPOINTS.KILLSESSION

    dispatch(logoutStart())
    dispatch(unsetAppError(ERRORS.CURRENT_USER_FETCH))

    return fPost(logoutUrl, {})
    	.then(fJSON)
    	.then((payload) => {
    		dispatch(logoutSuccess(payload))
    	})
    	.catch((err) => {
    		dispatch(logoutError(err))
    		dispatch(setAppError(err, ERRORS.LOG_OUT))
    	})
  }
}