import React from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'

function RocketShow() {
  const { id: rocketId } = useParams()

  const [rocket, setRocket] = React.useState([])

  React.useEffect(() => {
    async function getSingleRocket() {
      try {
        const response = await Axios.get(`https://api.spacexdata.com/v3/rockets/${rocketId}`)
        setRocket(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getSingleRocket()
  }, [rocketId])

  console.log(rocket)

  if (!rocket) return

  return (
    <div className="box">
      <h2 className="title has-text-centered">{rocket.rocket_name}</h2>
      <hr />
      <div className="columns">
        <div className="column is-half">
          <figure className="image">
            <img src={rocket.flickr_images} alt={rocket.rocket_name} />
          </figure>
        </div>
        <div className="column is-half">
          <h4 className="title is-4">Description</h4>
          <p>{rocket.description}</p>
        </div>
      </div>
    </div>
  )

}

export default RocketShow