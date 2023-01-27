import React from 'react'
import Product from './Product'

function Products({allProducts,addToCart}) {
  return (
   <div>
      {allProducts ?
      <div>
        {allProducts.map((oneProduct)=><Product key={oneProduct.id} product={oneProduct} addToCart={addToCart}/>)}
        </div> 
        : <div>loading data</div>
      }
      
    </div>
  )
}

export default Products
