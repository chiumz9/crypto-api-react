import Data from '../seed/Data.jsx'
import axios from 'axios';
import { useState, useEffect } from 'react'


function Find({db}) {
   const [page,setPage] = useState()
   
   function handleChange(event){
      
   }
   

   return (
      <div>
         <label>
            Find:
            <input type="text" name="name" onChange={(event)=>handleChange(event)}/>
         </label>
         <div className="Card">
            {db.map(
               coin => (
                  <div className="Info">
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

export default Find
