import React,{useEffect} from 'react'
import Product from './Product'
import'./Products.css'

function Products({allProducts,addToCart,cartProducts}) {

  return (
   <div className="ProductsWrapper">
      {allProducts.length > 0 ?
      <div className="ProductsListWrapper">
        {allProducts.map((oneProduct)=><Product key={oneProduct.id} product={oneProduct} addToCart={addToCart} cartProducts={cartProducts}/>)}
      </div> 
      : <div className="NoItems">No items found</div>}
    </div>
  )
}

export default Products
