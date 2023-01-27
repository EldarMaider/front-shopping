import React from 'react'

function Cart({deleteFromCart}) {
  return (
    <div>
          <div>My Cart</div>
          <button onClick={()=>deleteFromCart()}>Delete Item</button>
    </div>
  )
}

export default Cart
