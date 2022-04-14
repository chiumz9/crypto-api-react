import Data from '../seed/Data.jsx'
import axios from 'axios';
import { useState, useEffect } from 'react'


function All({ allData }) {
   let price = 0

   return (
      <div>
         <div className="Card">
            {allData.map(
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

export default All
