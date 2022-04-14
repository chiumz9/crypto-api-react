import { useState, useEffect } from 'react'
import './App.css';
import TopTen from './components/TopTen.jsx'
import All from './components/All.jsx'
import Modal from './components/Modal.jsx'


function App() {
   const [db, setDB] = useState([])
   const [topTen, setTopTen] = useState([])
   const [mode, setMode] = useState('topTen')
   const [showModal, setShowModal] = useState(false)
   const [currentCoin,setCurrentCoin] = useState({})

   const getData = () => {
      fetch('https://crypto-api-tracker.herokuapp.com/ticker')
         .then(res => res.json())
         .then(data => {
            setDB(data)
            setTopTen(data.filter(item => item.rank < 11))
         })
   }
   useEffect(() => {
      getData()
   }, [])


   return (
      <div className="App">
         <h1 className="Header">Crypto API</h1>
         <div className="Navbar">
            <div className="Button" onClick={()=>setMode('topTen')}>Top Ten Cryptos</div>
            <div className="Button" onClick={()=>setMode('all')}>All Cryptos</div>
            <div className="Button" onClick={()=>setMode('find')}>Find Crypto</div>
         </div>
         <div className="Body">
            {mode === 'topTen' ?  <TopTen topTen={topTen} setShowModal={setShowModal} setCurrentCoin={setCurrentCoin}/>:null}
            {mode === 'all' ? <All allData={db} />:null}
         </div>
         {showModal && <Modal currentCoin={currentCoin} setShowModal={setShowModal}/>}
      </div>
   )
}
export default App;
