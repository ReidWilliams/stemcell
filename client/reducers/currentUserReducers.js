'use strict'

import { 
  SIGN_UP_START, 
  SIGN_UP_SUCCESS, 
  SIGN_UP_ERROR,
  
  LOG_IN_START, 
  LOG_IN_SUCCESS, 
  LOG_IN_ERROR,

  CURRENT_USER_FETCH_START, 
  CURRENT_USER_FETCH_SUCCESS, 
  CURRENT_USER_FETCH_ERROR 
} from './../constants/actionTypes'


const placeholderUser = {
  isLoggedIn: false,
  isFetching: false,
  data: {
    username: null,
    certifications: []
  }
}

export function currentUser(state=placeholderUser, action) {
  let newState = Object.assign({}, state)
  switch (action.type) {

    // LOG_IN

    case LOG_IN_START:
      newState.isFetching = true
      return newState

    case LOG_IN_SUCCESS:
      newState.isLoggedIn = true
      newState.isFetching = false
      return newState

    case LOG_IN_ERROR:
      newState.isFetching = false
      return newState

    
    // CURRENT_USER_FETCH

    case CURRENT_USER_FETCH_START:
      console.log('user fetch start', action)
      newState.isFetching = true
      return newState
    
    case CURRENT_USER_FETCH_SUCCESS:
      console.log('user fetch success', action)
      newState.isFetching = false
      newState.data = action.payload
      newState.isLoggedIn = true
      return newState
        
    case CURRENT_USER_FETCH_ERROR:
      console.log('user fetch error', action)
      newState.isFetching = false
      return newState
    
    default:
      return state
  }
}

export default currentUser
