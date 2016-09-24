'use strict'

const { Record } = require('immutable')

const InitialState = Record({
  tripContent: new (Record({
    guideId: '',
    name: '',
    startSites: [],
    tripInfo: [],
    siteStatus: [],
  }))(),
  displayInfo: new (Record({
    display: false,
    displayDay: 0,
    displayWhich: 0,
    displayInfoTitle: '',
    displayInfoIntroduction: '',
    // displayTransportation: '',
  }))(),
  mapInfo: new (Record({
    headerText: '123',
    mainTitle: '123',
    subTitle: '',
    content: '',
    pos: {
      lat: 0,
      lng: 0,
    },
    nowPos: {
      lat: 24.7859146,
      lng: 120.996735,
    },
    heading: 0,
    markers: [],
    polyline: [],
    audioDuration: 0,
    distance: '0 m',
    address: '',
    audioPosition: 0,
  }))(),
  isFetching: false,
  error: null,
})
export default InitialState
