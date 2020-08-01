import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import DragonCard from './DragonCard'

function DragonsIndex() {

  const [dragons, setDragons] = React.useState([])

  React.useEffect(() => {
    async function getAllDragons() {
      try {
        const response = await axios.get(' https://api.spacexdata.com/v3/dragons')
        setDragons(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getAllDragons()
  }, [])

  return (
    <section>
      <div className="buttons has-addons is-centered">
        <Link to="/rockets" className="button is-info">Rockets</Link>
        <Link to="/dragons" className="button is-danger is-disabled">Dragons</Link>
      </div>
      <div className="columns is-mobile is-multiline">
        {dragons.map(dragon => (
          <DragonCard key={dragon.id} {...dragon} />
        ))}
      </div>
    </section>
  )
}

export default DragonsIndex