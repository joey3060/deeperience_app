/**
 * # tripReducer.js
 *
 * The reducer for all the actions about trip
 */
'use strict'
import InitialState from './tripInitialState'

const {
  GET_BUY_TRIP,
  GET_BUY_TRIP_SUCCESS,
  GET_BUY_TRIP_FAILURE,
  GET_TRIP_BY_CLASS,

  SET_TRIP_KEY,

  SET_TRIP_CONTENT,
  SET_TRIP_CONTENT_SUCCESS,
  SET_TRIP_CONTENT_FAILURE,

  SET_SITE_STATUS,

  SET_DISPLAY_INFO,
  SET_STATE,
  CLOSE_DISPLAY_INFO,

  ACTIVATE_SITE_BTN,
  DEACTIVATE_SITE_BTN,

  SET_MAP_INFO,
  SET_MAP_INFO_SUCCESS,
  SET_MAP_INFO_FAILURE,
  SET_MAP_DIRECTION,
  SET_MAP_DIRECTION_SUCCESS,
  SET_MAP_DIRECTION_FAILURE,

  SET_AUDIO,
  RESET_AUDIO,

  GET_DISPLAY_INFO_DIRECTION_START,

  SET_DISPLAY_INFO_TRANSIT,
  SET_DISPLAY_INFO_TRANSIT_SUCCESS,
  SET_DISPLAY_INFO_TRANSIT_FAILURE,
  TOGGLE_DISPLAY_INFO,

  SWITCH_DISPLAY_INFO_CARD,

  PRESS_MARKER_FAILURE,

  SET_NAVIGATION,
} = require('../../constants/actions').default

const initialState = new InitialState()

export default function tripReducer(state = initialState, action = {}) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state)
  let siteStatus
  let nowState
  let order
  const displayDay = state.getIn(['displayInfo', 'displayDay'])
  const displayWhich = state.getIn(['displayInfo', 'displayWhich'])
  switch (action.type) {
    case GET_BUY_TRIP:
      return state.setIn(['main', 'isFetching'], true)

    case GET_BUY_TRIP_SUCCESS:
      return state.setIn(['main', 'isFetching'], false)
                  .setIn(['main', 'tripContent'], action.payload)

    case GET_BUY_TRIP_FAILURE:
      return state.setIn(['main', 'isFetching'], false)
                  .setIn(['error'], action.payload)

    case GET_TRIP_BY_CLASS:
      return state

    case SET_TRIP_KEY:
      return state.setIn(['tripContent', 'tripKey'], action.payload)

    case SET_TRIP_CONTENT_SUCCESS:
      return state.setIn(['tripContent', 'guideId'], action.payload.tripContent.guideId)
                  .setIn(['tripContent', 'name'], action.payload.tripContent.name)
                  .setIn(['tripContent', 'startSite'], action.payload.tripContent.startSite)
                  .setIn(['tripContent', 'tripInfo'], action.payload.tripInfo.allInfo)
                  .setIn(['tripContent', 'siteStatus'], action.payload.tripInfo.siteStatus)
                  .setIn(['tripContent', 'dailyRemind'], action.payload.tripInfo.remind)
                  .setIn(['tripContent', 'period'], action.payload.tripInfo.period)
                  .setIn(['tripContent', 'isFetching'], false)

    case SET_TRIP_CONTENT_FAILURE:
      return state.setIn(['tripContent', 'isFetching'], false)
                  .setIn(['error'], action.payload)

    case SET_TRIP_CONTENT:
      return state.setIn(['tripContent', 'isFetching'], true)

    case SET_SITE_STATUS:
      return state.setIn(['tripContent', 'siteStatus'], action.payload)

    case SET_DISPLAY_INFO:
      return state.setIn(['displayInfo', 'info', 'name'], action.payload.name)
                  .setIn(['displayInfo', 'info', 'introduction'], action.payload.introduction)
                  .setIn(['displayInfo', 'info', 'tags'], action.payload.tags)
                  .setIn(['displayInfo', 'info', 'fee'], action.payload.fee)
                  .setIn(['displayInfo', 'info', 'recentActivity'], action.payload.recentActivity)
                  .setIn(['displayInfo', 'info', 'openPeriod'], action.payload.openPeriod)
                  .setIn(['displayInfo', 'display'], true)

    case CLOSE_DISPLAY_INFO:
      return state.setIn(['displayInfo', 'display'], false)
                  .setIn(['displayInfo', 'displayMode'], false)

    case ACTIVATE_SITE_BTN:
      siteStatus = state.getIn(['tripContent', 'siteStatus'])
      order = action.payload.order
      if (siteStatus[displayDay][order] === 1) siteStatus[displayDay][order] = 2
      else if (siteStatus[displayDay][order] === 3) siteStatus[displayDay][order] = 4
      else if (siteStatus[displayDay][order] === 5) siteStatus[displayDay][order] = 6
      return state.setIn(['tripContent', 'siteStatus'], siteStatus)
                  .setIn(['displayInfo', 'displayWhich'], order)

    case DEACTIVATE_SITE_BTN:
      siteStatus = state.getIn(['tripContent', 'siteStatus'])
      if (siteStatus[displayDay][displayWhich] === 2) siteStatus[displayDay][displayWhich] = 1
      else if (siteStatus[displayDay][displayWhich] === 4) siteStatus[displayDay][displayWhich] = 3 // pioneer sitesite
      else if (siteStatus[displayDay][displayWhich] === 6) siteStatus[displayDay][displayWhich] = 5 // frontier sitesite
      return state.setIn(['tripContent', 'siteStatus'], siteStatus)
                  .setIn(['displayInfo', 'transit', 'fetched'], false)

    case SET_MAP_INFO:
      return state.setIn(['mapInfo', 'headerText'], action.payload.content.name)
                  .setIn(['mapInfo', 'mainTitle'], action.payload.content.name)
                  .setIn(['mapInfo', 'subTitle'], action.payload.content.mapSite[0].name)
                  .setIn(['mapInfo', 'content'], action.payload.content.mapSite[0].introduction)
                  .setIn(['mapInfo', 'pos'], action.payload.content.mapSite[0].position)
                  .setIn(['mapInfo', 'polyline'], [])
                  .setIn(['mapInfo', 'markers'], action.payload.content.mapSite)
                  .setIn(['mapInfo', 'address'], action.payload.content.mapSite[0].address)
                  .setIn(['mapInfo', 'isFetching'], true)

    case SET_MAP_INFO_SUCCESS:
      return state.setIn(['mapInfo', 'isFetching'], false)

    case SET_MAP_INFO_FAILURE:
      return state.setIn(['mapInfo', 'isFetching'], false)
                  .setIn(['error'], action.payload)

    case SET_MAP_DIRECTION:
      return state
    case SET_MAP_DIRECTION_SUCCESS:
      return state.setIn(['mapInfo', 'mainTitle'], action.payload.name)
                  .setIn(['mapInfo', 'subTitle'], action.payload.name)
                  .setIn(['mapInfo', 'content'], action.payload.introduction)
                  .setIn(['mapInfo', 'polyline'], action.payload.polyline)
                  .setIn(['mapInfo', 'distance'], action.payload.distance)
    case SET_MAP_DIRECTION_FAILURE:
      return state.setIn(['error'], action.payload)

    case SET_AUDIO:
      let newState = state
      const { audioURL, audioDuration, audioPosition } = action.payload
      if (audioURL) newState = newState.setIn(['mapInfo', 'audioURL'], audioURL)
      if (audioDuration && audioDuration > 0) newState = newState.setIn(['mapInfo', 'audioDuration'], audioDuration)
      if (audioPosition) newState = newState.setIn(['mapInfo', 'audioPosition'], audioPosition)
      return newState

    case RESET_AUDIO:
      return state.setIn(['mapInfo', 'audioURL'], '')
                  .setIn(['mapInfo', 'audioPosition'], 0)
                  .setIn(['mapInfo', 'audioDuration'], 1)

    case GET_DISPLAY_INFO_DIRECTION_START:
      return state.setIn(['displayInfo', 'transit', 'isFetching'], true)

    case SET_DISPLAY_INFO_TRANSIT:
      return state

    case SET_DISPLAY_INFO_TRANSIT_SUCCESS:
      const {
        departureTime,
        arrivalTime,
        duration,
        steps,
        fare,
      } = action.payload
      return state.setIn(['displayInfo', 'transit', 'departureTime'], departureTime)
                  .setIn(['displayInfo', 'transit', 'arrivalTime'], arrivalTime)
                  .setIn(['displayInfo', 'transit', 'duration'], duration)
                  .setIn(['displayInfo', 'transit', 'steps'], steps)
                  .setIn(['displayInfo', 'transit', 'fare'], fare)
                  .setIn(['displayInfo', 'transit', 'isFetching'], false)
                  .setIn(['displayInfo', 'transit', 'fetched'], true)

    case SET_DISPLAY_INFO_TRANSIT_FAILURE:
      return state.setIn(['displayInfo', 'transit', 'isFetching'], false)
                  .setIn(['error'], action.payload)

    case TOGGLE_DISPLAY_INFO:
      nowState = state.getIn(['displayInfo', 'displayMode'])
      return state.setIn(['displayInfo', 'displayMode'], !nowState)

    case SWITCH_DISPLAY_INFO_CARD:
      return state.setIn(['displayInfo', 'displayWhichCard'], action.payload)

    case PRESS_MARKER_FAILURE:
      return state.setIn(['error'], action.payload)

    case SET_NAVIGATION:
      return state.setIn(['displayInfo', 'navigation', 'from'], action.payload.from)
                  .setIn(['displayInfo', 'navigation', 'to'], action.payload.to)
                  .setIn(['displayInfo', 'navigation', 'polyline'], action.payload.polyline)
                  .setIn(['displayInfo', 'transit', 'isFetching'], false)
    case SET_STATE:
      return state
  }

  return state
}
