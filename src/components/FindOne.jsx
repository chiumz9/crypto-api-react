import Data from '../seed/Data.jsx'
import axios from 'axios';
import { useState, useEffect } from 'react'


function Find({ db, setShowModal }) {
  const [input, setInput] = useState('')
  const [finder, setFinder] = useState([])

  function handleChange(event) {
    let { value } = event.target
    setInput(value)
    let foundItems = db.filter(coin => {
      return coin.name?.toLowerCase().includes(value.toLowerCase())
    })
    setFinder(foundItems)
    if (foundItems.length && foundItems.length === 0) {
      setShowModal(false)
    }
  }

  useEffect(() => {
    setFinder(db)
  }, [])

  return (
    <div>
      <label>
        Find:
        <input type="text" name="name" onChange={(event) => handleChange(event)} />
      </label>
      <div className="Card">
        {finder.length && finder.map(
          coin => (
            <div className="Info">
              <div>{coin.name}</div>
              <div>{coin.symbol}</div>
              <div>Price:</div>
              <div>{coin.quotes?.USD.price}</div>
            </div>
          )
        )}
      </div>
    </div>
  )

}

export default Find
