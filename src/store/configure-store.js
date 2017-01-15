import rootReducer from '../reducers'
import thunk from 'redux-thunk'

// import{ createStore, applyMiddleware } from 'redux'

// export default (initialState) => {
//   return createStore(rootReducer, initialState, applyMiddleware(thunk))
// }

import { createStore, applyMiddleware, compose } from 'redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default (preloadedState) => 
  createStore(rootReducer, preloadedState, composeEnhancers(
    applyMiddleware(thunk)
  ))
