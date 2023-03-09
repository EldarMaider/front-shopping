import React, {useState,useEffect} from 'react'
import Product from './Product'

function ProductsByCategory({products,addToCart,cartProducts,categoryName}) {
    const [productsByCategory, setProductsByCategory] = useState([])

    useEffect(() => {
        setProductsByCategory(products.filter((oneProduct)=>oneProduct.category===categoryName))
    }, [categoryName])

  return (
    <div className="ProductsWrapper">
      {productsByCategory.length > 0 ?
      <div className="ProductsListWrapper">
        {productsByCategory.map((oneProduct)=><Product key={oneProduct.id} product={oneProduct} addToCart={addToCart} cartProducts={cartProducts}/>)}
      </div> 
      : <div className="NoItems">No items found</div>}
    </div>
  )
}

export default ProductsByCategory
