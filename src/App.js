import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'

import Introduction from './screens/Introduction/Introduction.js'

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Introduction />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
