import {
  REMOVE_ADDRESS,
  SET_ABOUT,
  SET_BOOKINGS,
  SET_CAR_TYPES,
  SET_CHOOSEN_PACKET,
  SET_CHOOSEN_SUB_PACKET,
  SET_NEWS,
  SET_PACKETS,
  SET_SERVICES,
  SET_SLIDER_PHOTOS,
  SET_SUB_PACKETS,
  SET_TIMES,
} from './CarWashActions.js'

const initialState = {
  about: [],
  times: [],
  carTypes: [],
  packets: [],
  subPackets: [],
  services: [],
  choosenSubPacket: [],
  choosenPacket: [],
  bookings: [],
  news: [],
  sliderPhotos: [],
}

export default function addressReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ABOUT:
      return {
        ...state,
        about: action.payload,
      }
      break

    case SET_TIMES:
      return {
        ...state,
        times: action.payload,
      }
      break

    case SET_CAR_TYPES:
      return {
        ...state,
        carTypes: action.payload,
      }
      break

    case SET_PACKETS:
      return {
        ...state,
        packets: action.payload,
      }
      break

    case SET_SUB_PACKETS:
      return {
        ...state,
        subPackets: action.payload,
      }
      break

    case SET_SERVICES:
      return {
        ...state,
        services: action.payload,
      }
      break

    case SET_CHOOSEN_SUB_PACKET:
      const existingCardIndex = state.choosenSubPacket.findIndex(
        (obj) => obj.SUB_PACKET_ID === action.payload.SUB_PACKET_ID,
      )

      if (existingCardIndex !== -1) {
        // Card with same SUB_PACKET_ID already exists, remove it
        const updatedCardIds = state.choosenSubPacket.filter(
          (obj) => obj.SUB_PACKET_ID !== action.payload.SUB_PACKET_ID,
        )
        return {
          ...state,
          choosenSubPacket: updatedCardIds,
        }
      } else {
        // Card doesn't exist, add it to the array
        return {
          ...state,
          choosenSubPacket: [...state.choosenSubPacket, action.payload],
        }
      }
      break

    case SET_CHOOSEN_PACKET:
      return {
        ...state,
        choosenPacket: action.payload,
      }
      break

    case SET_BOOKINGS:
      return {
        ...state,
        bookings: action.payload,
      }
      break

    case SET_NEWS:
      return {
        ...state,
        news: action.payload,
      }
      break

    case SET_SLIDER_PHOTOS:
      return {
        ...state,
        sliderPhotos: action.payload,
      }
      break

    case REMOVE_ADDRESS:
      return {
        ...state,
        address: state.address.filter(
          (inAddress) => inAddress.UID !== action.payload,
        ),
      }
      break

    default:
      return state
  }
}
