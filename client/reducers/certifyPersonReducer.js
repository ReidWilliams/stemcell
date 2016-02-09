'use strict'

import { 
  CERTIFY_STATE_NOT_STARTED, 
  CERTIFY_STATE_STARTED, 
  CERTIFY_STATE_SUCCESS, 
  CERTIFY_STATE_FAILED, 
  CERTIFY_SOMEONE_START, 
  CERTIFY_SOMEONE_SUCCESS, 
  CERTIFY_SOMEONE_ERROR,
  CERTIFY_RECEIVER_USERNAME_SEARCH_RESULTS,
  CERTIFY_RECEIVER_SELECTED,
  CERTIFY_RECEIVER_CHANGED
} from './../constants/actionTypes'


const placeholder = {
  receiverUsernameSearchResults: [],
  certifyState: CERTIFY_STATE_NOT_STARTED,
  error: null,
  receiver: null, // tracks whatever user types, but will be valid receiver when user
  // chooses from the pictures that pop up
  receiverIsSelected: false // has the user selected one of the pictures

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

    case CERTIFY_RECEIVER_USERNAME_SEARCH_RESULTS:
      newState.receiverUsernameSearchResults = action.payload
      return newState

    case CERTIFY_RECEIVER_SELECTED:
      newState.receiver = action.payload
      newState.receiverIsSelected = true
      return newState

    case CERTIFY_RECEIVER_CHANGED:
      console.log(action.payload)
      newState.receiver = action.payload
      newState.receiverIsSelected = false
      return newState

    default:
      return state
  }
}

export default certifySomeone
