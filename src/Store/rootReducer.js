import { combineReducers } from 'redux'
import {
  default as about,
  default as bookings,
  default as carTypes,
  default as choosenPacket,
  default as choosenSubPacket,
  default as news,
  default as packets,
  default as services,
  default as sliderPhotos,
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
  bookings,
  news,
  sliderPhotos,
})

export default rootReducer
