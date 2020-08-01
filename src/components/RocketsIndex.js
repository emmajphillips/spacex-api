import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import RocketCard from './RocketCard'

function RocketsIndex() {

  const [rockets, setRockets] = React.useState([])

  React.useEffect(() => {
    async function getAllRockets() {
      try {
        const response = await axios.get('https://api.spacexdata.com/v3/rockets')
        setRockets(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllRockets()
  }, [])

  return (
    <section>
      <div className="buttons has-addons is-centered">
        <Link to="/rockets" className="button is-info is-disabled">Rockets</Link>
        <Link to="/dragons" className="button is-danger">Dragons</Link>
      </div>
      <div className="columns is-mobile is-multiline">
        {rockets.map(rocket => (
          <RocketCard key={rocket.id} {...rocket} />
        ))}
      </div>
    </section>
  )
}

export default RocketsIndex