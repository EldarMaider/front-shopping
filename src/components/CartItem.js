import { useState } from "react"
import DecideDelelte from "./DecideDelelte"
import './CartItem.css'
import { FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa'

function CartItem({oneProduct,deleteItemForSure,dialogMessage,changeDialogOnDelete,decreaseAmount,increaseAmount}) {

  const [showModels,setShowModels] = useState(false)

  const showDialog = () => {
    setShowModels(true)
  }

  const deleteItem = () => {
    deleteItemForSure(oneProduct.id);
  }

  return (
    <div className="cartItemWrapper">
      <div className="cartItemForRow">
        <div><img src={`http://127.0.0.1:8000/static/${oneProduct.image}`} alt={oneProduct.image}/></div>
        <div className="cartItemForColumn">
          <h4>{oneProduct.name}</h4>
          <h4 className="cartProductPrice">{`$${oneProduct.price}`}</h4>
          <button className="cartRemoveButton"onClick={()=>showDialog()}>remove</button>
        </div>
        <div>
          <button className='arrowButton' onClick={()=>increaseAmount(oneProduct)}><FaLongArrowAltUp/></button>
          <div className='cartItemAmount'>{oneProduct.amount}</div>
          <button disabled={oneProduct.amount === 1} className='arrowButton' onClick={()=>decreaseAmount(oneProduct.id)}><FaLongArrowAltDown/></button>
        </div>
      </div>
      {showModels && <DecideDelelte dialogMessage={`Are you sure you want to delete ${oneProduct.name} ?`} cancelDelete={()=>setShowModels(false)} changeDialogOnDelete={deleteItem}/>}
    </div>

  )
}

export default CartItem
