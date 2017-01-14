import rootReducer from '../reducers'
// import createLogger from 'redux-logger'
// import thunkMiddleware from 'redux-thunk'
import {createStore } from 'redux'

export default (initialState) => {
  return createStore(rootReducer, initialState)
}

