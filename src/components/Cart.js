import React, {useState,useEffect} from 'react'
import CartItems from './CartItems'
import DecideDelelte from './DecideDelelte'
import NoItemsInCart from './NoItemsInCart'
import Purchase from './Purchase'
import "./Cart.css"


function Cart({cartProducts,deleteCart,deleteItemForSure,dialogMessage,submitOrder,decreaseAmount,increaseAmount}) {
  const [sum, setSum] = useState(0)
  const [showDialog, setShowDialog] = useState(false)
  const [finalSubmit, setFinalSubmit] = useState(false)

  const cancelDelete = () => {
    setShowDialog(false)
  }

  const cancelPurchase = ()=>{
    setFinalSubmit(false)
  }

  const changeDialogOnDelete = () => {
    setShowDialog(false)
    deleteCart()
  }

  const passSubmit = () => {
    submitOrder()
    setFinalSubmit(false)
  }


  useEffect(()=>{
    const itemsSum = cartProducts.reduce((sum, item)=>sum+(Number(item.price)*item.amount), 0)
    setSum(itemsSum.toFixed(2))
  },[cartProducts])

  return (
    <div className='cartWrapper'>
          <h1 className='cartHeader'>Cart</h1>
          <CartItems increaseAmount={increaseAmount} decreaseAmount={decreaseAmount} dialogMessage={dialogMessage} deleteItemForSure={deleteItemForSure} cartProducts={cartProducts} changeDialogOnDelete={changeDialogOnDelete}/>
          {cartProducts.length>0 && <button className="purchase-button" onClick={()=>setFinalSubmit(true)}> Purchase </button>}
          {cartProducts.length>0 && <div className="totalSum"><div>Total</div><div>${sum}</div></div>}
          {cartProducts.length>0 ? <button  className="clearAllButton" onClick={()=> setShowDialog(true)}>Clear All Items</button>:<NoItemsInCart/>}
          {showDialog && <DecideDelelte dialogMessage='Are you sure you want to delete all items?' cancelDelete={cancelDelete} changeDialogOnDelete={changeDialogOnDelete}/>}
          {finalSubmit && <Purchase dialogMessage='Are you ready to submit your order?' cancelPurchase={cancelPurchase} submitOrder={submitOrder} passSubmit={passSubmit}/>}
    </div>
  )
}

export default Cart
