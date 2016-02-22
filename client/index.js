'use strict'

// // Globals
// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Router, browserHistory } from 'react-router'
// import { Provider } from 'react-redux'
// import { syncHistory, routeReducer } from 'react-router-redux'
// import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form';
// import { combineReducers, createStore, applyMiddleware } from 'redux'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux'

//import { history } from './config/history'
import getRoutes from './config/routes'
import currentUserReducer from './reducers/currentUserReducers'
import appErrorReducer from './reducers/appErrorReducers'
import certifyPersonReducer from './reducers/certifyPersonReducer'

// import css
import './styles/main.scss'

const appReducer = combineReducers({
  form: formReducer,
  appErrors: appErrorReducer,
  currentUser: currentUserReducer,
  certifyPerson: certifyPersonReducer,
  routing: routeReducer
})

const reduxRouterMiddleware = syncHistory(browserHistory)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore)

const appStore = createStoreWithMiddleware(appReducer)


// const createStoreWithMiddleware = applyMiddleware(
//   thunkMiddleware
// )(createStore)

// const appStore = createStoreWithMiddleware(appReducer)

// const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={ appStore }>
    <Router history={ browserHistory }>
      { getRoutes(appStore) }
    </Router>
  </Provider>, 
  document.getElementById('root')
)



// Notes:
// use this: https://getsentry.com/welcome/
// Regarding smart and dumb components
// https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
// https://github.com/rackt/redux-simple-router/blob/1.0.2/examples/basic/app.js
// https://github.com/acdlite/flux-standard-action
