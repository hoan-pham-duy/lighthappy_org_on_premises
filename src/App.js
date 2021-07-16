import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'

import Homepage from './screens/Homepage/Homepage.js'

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Homepage />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
