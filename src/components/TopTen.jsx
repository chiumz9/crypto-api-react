import Data from '../seed/Data.jsx'
import axios from 'axios';
import { useState, useEffect } from 'react'

function TopTen({ topTen,setShowModal,setCurrentCoin }) {

   function passParent(coin) {
      setCurrentCoin(coin)
      setShowModal(true)
   }
   return (
      <div>
         <div className="Card">
            {topTen.map(
               coin => (
                  <div className="Info" onClick={()=>passParent(coin)}>
                     <div>{coin.name}</div>
                     <div>{coin.symbol}</div>
                     <div>Price:</div>
                     <div>{coin.quotes.USD.price}</div>
                  </div>
               )
            )}
         </div>
      </div>
   )

}

export default TopTen

                     //<div>{if (coin.quotes.USD.price > 1) ( Math.floor(coin.quotes.USD.price))} : {coin.quotes.USD.price}</div>
