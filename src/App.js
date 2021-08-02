import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'

import Homepage from './screens/Homepage/Homepage.js'
import RealTimeChatRoom from './screens/RealTimeChatRoom/RealTimeChatRoom.js'
import PdfTools from './screens/PdfTools/PdfTools.js'

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Homepage />} />
        <Route exact path="/real-time-chat-room" render={() => <RealTimeChatRoom />} />
        <Route exact path="/pdf-tools" render={() => <PdfTools />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
