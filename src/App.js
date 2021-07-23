import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'

import Homepage from './screens/Homepage/Homepage.js'
import RealTimeChatRoom from './screens/RealTimeChatRoom/RealTimeChatRoom'

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Homepage />} />
        <Route exact path="/real-time-chat-room" render={() => <RealTimeChatRoom />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
