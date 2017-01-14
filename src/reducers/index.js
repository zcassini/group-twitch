import people from './people-reducer.js'
import streamers from './streamers-reducer.js'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  people,
  streamers
})

export default rootReducer
