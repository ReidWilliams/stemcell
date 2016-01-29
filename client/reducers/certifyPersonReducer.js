'use strict'

// Globals
import { combineReducers } from 'redux'
import storage from './../vendor/store'

import { 
  CERTIFY_STATE_NOT_STARTED, 
  CERTIFY_STATE_STARTED, 
  CERTIFY_STATE_SUCCESS, 
  CERTIFY_STATE_FAILED, 
  CERTIFY_SOMEONE_START, 
  CERTIFY_SOMEONE_SUCCESS, 
  CERTIFY_SOMEONE_ERROR 
} from './../constants/actionTypes'


const placeholder = {
  certifyState: CERTIFY_STATE_NOT_STARTED,
  error: undefined
}

export function certifySomeone(state=placeholder, action) {
  let newState = Object.assign({}, state)
  switch (action.type) {

    case CERTIFY_SOMEONE_START:
      newState.certifyState = CERTIFY_STATE_STARTED
      return newState

    case CERTIFY_SOMEONE_SUCCESS:
      newState.certifyState = CERTIFY_STATE_SUCCESS
      return newState

    case CERTIFY_SOMEONE_ERROR:
      newState.certifyState = CERTIFY_STATE_FAILED
      newState.error = action.payload
      return newState
  
    default:
      return state
  }
}

export default certifySomeone
