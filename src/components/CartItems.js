import React from 'react'
import CartItem from './CartItem'
import './CartItems.css'

function CartItems({cartProducts,deleteItemForSure,changeDialogOnDelete,decreaseAmount,increaseAmount}) {
  return (
    <div className="cart-items">
      {cartProducts.map((oneProduct)=><CartItem key={oneProduct.id} increaseAmount={increaseAmount} decreaseAmount={decreaseAmount} changeDialogOnDelete={changeDialogOnDelete} deleteItemForSure={deleteItemForSure} oneProduct={oneProduct}/>)}
      
      
    </div>
  )
}

export default CartItems
