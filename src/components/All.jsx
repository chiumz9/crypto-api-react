import Data from '../seed/Data.jsx'
import axios from 'axios';
import { useState, useEffect } from 'react'


function All({ allData, setCurrentCoin, setShowModal }) {
  let price = 0
  function passParent(coin) {
    setCurrentCoin(coin)
    setShowModal(true)
  }

  return (
    <div>
      <div className="Card">
        {allData.map(
          coin => (
            <div className="Info" onClick={() => passParent(coin)}>
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

export default All
