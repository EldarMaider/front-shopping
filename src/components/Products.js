import React from 'react'
import Product from './Product'

function Products({products,addToCart}) {
  return (
    <div>
      {products.map((oneProduct)=><Product key={oneProduct.id} product={oneProduct} addToCart={addToCart}/>)}
    </div>
  )
}

export default Products
