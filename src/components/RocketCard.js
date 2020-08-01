import React from 'react'
import { Link } from 'react-router-dom'


function RocketCard({ rocket_name, flickr_images, active, id }) {
  return (

    <div className="column is-one-quarter-desktop is-one0third-tablet is-half-mobile">
      <Link to={`/rockets/${id}`}>
        <div className="card">
          <div className="card-header">
            <h4 className="card-header-title">{rocket_name}</h4>
          </div>
          <div className="card-image">
            <figure className="image is-1by1">
              <img src={flickr_images[0]} alt={rocket_name} loading="lazy" width="255" height="255" />
            </figure>
          </div>
          <div className="card-content">
            {active ? 
              <h5>Active</h5>
              :
              <h5>Inactive</h5>
            }
          </div>
        </div>
      </Link>
    </div>

  )
}

export default RocketCard