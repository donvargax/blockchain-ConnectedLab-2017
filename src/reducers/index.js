import {combineReducers} from "redux"

import events from './events'
import runs from './runs'

export default combineReducers({
  events,
  runs
})
