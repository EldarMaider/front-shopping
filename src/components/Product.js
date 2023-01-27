import React from 'react'

function Product({product,addToCart}) {
  return (
    <div>
       <h2>{product.name}</h2>
        <h3>{product.description}</h3>
        <h3>{product.price}</h3>
        <img src={'https://shopping-k6qe.onrender.com'+product.image} alt={product.name}/>
        <button onClick={addToCart}>Add To My Cart</button>
    </div>
  )
}

export default Product
