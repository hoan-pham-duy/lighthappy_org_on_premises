import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'

import Homepage from './screens/Homepage/Homepage.js'
import AboutMe from './screens/AboutMe/AboutMe'
import RealTimeChatRoom from './screens/RealTimeChatRoom/RealTimeChatRoom.js'
import PdfTools from './screens/PdfTools/PdfTools.js'
import SignIn from './screens/SignIn/SignIn.js'
import TechnicalDetails from './screens/TechnicalDetails/TechnicalDetails'

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Homepage />} />
        <Route exact path="/about-me" render={() => <AboutMe />} />
        <Route exact path="/real-time-chat-room" render={() => <RealTimeChatRoom />} />
        <Route exact path="/pdf-tools" render={() => <PdfTools />} />
        <Route exact path="/signin" render={() => <SignIn />} />
        <Route exact path="/technical-details" render={() => <TechnicalDetails />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
