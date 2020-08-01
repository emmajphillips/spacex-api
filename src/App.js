import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/common/Home'
import LandingPage from './components/common/LandingPage'
import RocketsIndex from './components/rockets/RocketsIndex'
import RocketShow from './components/rockets/RocketShow'
import DragonsIndex from './components/dragons/DragonsIndex'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/rockets/:id" component={RocketShow} />
        <Route path="/rockets" component={RocketsIndex} />
        <Route path="/dragons" component={DragonsIndex} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
