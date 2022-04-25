import { useState, useEffect } from 'react'
import './App.css';
import TopTen from './components/TopTen.jsx'
import All from './components/All.jsx'
import Modal from './components/Modal.jsx'
import Find from './components/FindOne.jsx'


function App() {
  const [db, setDB] = useState([])
  const [topTen, setTopTen] = useState([])
  const [mode, setMode] = useState('topTen')
  const [showModal, setShowModal] = useState(false)
  const [currentCoin, setCurrentCoin] = useState({})

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
    console.log("fetched")
  }, [])


  return (
    <div className="App">
      <h1 className="Header">Crypto API</h1>
      <div className="Navbar">
        <button className="Button" onClick={() => setMode('topTen')}>Top Ten Cryptos</button>
        <button className="Button" onClick={() => setMode('all')}>All Cryptos</button>
        <button className="Button" onClick={() => setMode('find')}>Find Crypto</button>
      </div>
      <div className="Body">
        {mode === 'topTen' ? <TopTen topTen={topTen} setShowModal={setShowModal} setCurrentCoin={setCurrentCoin} /> : null}
        {mode === 'all' ? <All allData={db} setShowModal={setShowModal} setCurrentCoin={setCurrentCoin} /> : null}
        {mode === 'find' ? db.length && <Find db={db} setShowModal={setShowModal} /> : null}
      </div>
      {showModal && <Modal currentCoin={currentCoin} setShowModal={setShowModal} />}
    </div>
  )
}
export default App;
