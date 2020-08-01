import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <> 
      <section className="hero is-fullheight is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-centered">
              <span role="img" aria-label="logo" className="logo-emoji">🚀 </span>
            SpaceX API
            </h1>
            <Link to="/landing" className="button is-link is-normal is-inverted is-outlined is-centered">Enter</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home