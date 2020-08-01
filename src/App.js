import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import LandingPage from './components/LandingPage'
import RocketsIndex from './components/RocketsIndex'
import DragonsIndex from './components/DragonsIndex'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/rockets" component={RocketsIndex} />
        <Route path="/dragons" component={DragonsIndex} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
