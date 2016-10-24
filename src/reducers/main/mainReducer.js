/**
 * # authReducer.js
 *
 * The reducer for all the actions from the various log states
 */
'use strict'
/**
 * ## Imports
 * The InitialState for auth
 * fieldValidation for validating the fields
 * formValidation for setting the form's valid flag
 */
import InitialState from './mainInitialState'

const {
  SET_STATE,

  SET_FEE,
  SET_DAY,
  SET_HOTEL_TYPE,
  SET_TRIP_LOCATION,
  RESIDENT_FEE,
  TRIP_FEE,
} = require('../../lib/constants').default

const initialState = new InitialState()

export default function authReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state)

  const tripFee = state.getIn(['tripFee'])
  const residentFee = state.getIn(['residentFee'])
  const day = state.getIn(['day'])
  switch (action.type) {
    case SET_FEE:
      if (action.payload.type === RESIDENT_FEE) {
        return state.setIn(['residentFee'], action.payload.fee)
                    .setIn(['allFee'], [(action.payload.fee[0] + tripFee[0]) * day,
                                        (action.payload.fee[1] + tripFee[1]) * day])
      } else if (action.payload.type === TRIP_FEE) {
        return state.setIn(['tripFee'], action.payload.fee)
                    .setIn(['allFee'], [(action.payload.fee[0] + residentFee[0]) * day,
                                        (action.payload.fee[1] + residentFee[1]) * day])
      }
      return state

    case SET_DAY:
      return state.setIn(['day'], action.payload.day)
                  .setIn(['allFee'], [(tripFee[0] + residentFee[0]) * action.payload.day,
                                      (tripFee[1] + residentFee[1]) * action.payload.day])
    case SET_HOTEL_TYPE:
      return state.setIn(['hotelType'], action.payload.type)

    case SET_TRIP_LOCATION:
      return state.setIn(['tripLocation'], action.payload.tripLocation)

    case SET_STATE:
      return state
  }
  return state
}
