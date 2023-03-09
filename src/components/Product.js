import { Link,useNavigate } from "react-router-dom"
import {useState, useEffect} from 'react'
import './Product.css'

function Product({product,addToCart,cartProducts}) {
  const [productAlreadyInCart, setProductAlreadyInCart] = useState(false);

  useEffect(() => {
    setProductAlreadyInCart(cartProducts.some(productInCart => productInCart.id === product.id))
  },[cartProducts])

  return (
    <div className='cardWrapper'>
       <Link to={`/products/${product.id}`}><img className="cardImage" src={`http://127.0.0.1:8000/static/${product.image}`} alt={product.name}></img></Link>
       <h2>{product.name}</h2>
        <h3>{product.description}</h3>
        <h3>{`${product.price} $`}</h3>
        {productAlreadyInCart && <h4 className="cardMessage"><span className="astrix">*</span>Product is in cart</h4>}
        <div className='productButtonWrapper'>
        <button className='productButton' disabled={productAlreadyInCart} onClick={()=>addToCart(product.id)}>Add To My Cart</button>
        </div>
    </div>
  )
}

export default Product
