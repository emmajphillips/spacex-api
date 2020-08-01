import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className="is-primary">
      <div className="buttons has-addons is-centered">
        <Link to="/rockets" className="button is-info">Rockets</Link>
        <Link to="/dragons" className="button is-danger">Dragons</Link>
      </div>
      <div>
        <p className="has-text-centered">Select one of the options above</p>
      </div>
    </div>
  )
}

export default LandingPage