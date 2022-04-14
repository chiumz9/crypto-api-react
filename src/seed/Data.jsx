import {useState,useEffect} from 'react'


function Data() {
   const [db, setDB] = useState()
   
   const Api = () => {
      fetch('https://crypto-api-tracker.herokuapp.com/ticker')
         .then(res => res.json()) 
         .then( data => {
            //setDB(data)
            setDB(data)
         })
   }
   useEffect( ()=>{
      Api()
   },[])

   return  (
      <div>
         {db && <div> {db[0].name} </div>}
      </div>
   );
}
export default Data
