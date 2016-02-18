'use strict'

// Logout Actions 
import q from 'q'

import { 
  LOG_OUT_START,
  LOG_OUT_SUCCESS,
  LOG_OUT_ERROR 
} from './../constants/actionTypes'
import * as ERRORS from './../constants/errorTypes'

import { setAppError, unsetAppError } from './appErrorActions'

// LOG_IN Action Creators

export function logoutStart() {
  return {
    type: LOG_OUT_START
  }
}

export function logoutSuccess() {
  return {
    type: LOG_OUT_SUCCESS
  }
}

export function logoutError() {
  return {
    type: LOG_OUT_ERROR
  }
}

export function logoutUser() {
  return (dispatch) => {
    dispatch(logoutStart())
    dispatch(unsetAppError(ERRORS.CURRENT_USER_FETCH))

    return q(dispatch(logoutSuccess()))
  }
}
