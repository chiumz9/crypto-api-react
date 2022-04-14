
function Modal({currentCoin, setShowModal}){

   function trigger(){
      setShowModal(false)
   }
   return (
      <div className="ModalCotainer">
         <div className="Modal">
            <span className="Close" onClick={()=>trigger()}>&times;</span>
            <h2>{currentCoin.name}</h2><br/>
            Symbol: {currentCoin.symbol}<br/>
            Ranked: {currentCoin.rank}<br/>
            Supply: {currentCoin.circulating_supply}<br/>
            Last updated: {currentCoin.last_updated}<br/><br/>
            Price:
            <h3>{currentCoin.quotes.USD.price}</h3>
         </div>
      </div>

   )
}
export default Modal
