import { combineReducers } from 'redux'
import {
  default as about,
  default as carTypes,
  default as choosenPacket,
  default as choosenSubPacket,
  default as packets,
  default as services,
  default as subPackets,
  default as times,
} from './CarWash/CarWashReducer.js'

const rootReducer = combineReducers({
  about,
  times,
  carTypes,
  packets,
  subPackets,
  services,
  choosenSubPacket,
  choosenPacket,
})

export default rootReducer
