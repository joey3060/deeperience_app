'use strict'

import Deeperience from './src/deeperience'
import Reactotron from 'reactotron-react-native'
Reactotron
  .configure() // we can use plugins here -- more on this later
  .connect() // let's connect!
Deeperience('android')


