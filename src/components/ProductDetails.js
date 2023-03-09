import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import "./ProductDetails.css"

function ProductDetails({addToCart, cartProducts}) {
    const [specificProduct, setSpecificProduct] = useState(null)
    const { id } = useParams();
    const [isInCart, setIsInCart] = useState(false)

    useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/products/${id}`)
        const specificProductData = await res.json()
        setSpecificProduct(specificProductData)
        setIsInCart(cartProducts.some((singleProduct)=>singleProduct.id === specificProductData.id))
      }
      catch(error) {
        console.log(error)
      } 
    }
    getProduct();
    }, [])


    const addingSpecificProduct =  () => {
        setIsInCart(true)
        addToCart(specificProduct.id)
    }

  return (
      <>
        {specificProduct ? 
            <div className='cardWrapper'>
                <img className="cardImage" src={`http://127.0.0.1:8000/static/${specificProduct.image}`} alt={specificProduct.name}></img>
                <h2>{specificProduct.name}</h2>
                <h3>{specificProduct.description}</h3>
                <h3>{`${specificProduct.price} $`}</h3>
                {isInCart && <h4 className="cardMessage"><span className="astrix">*</span>Product is in cart</h4>}
                <div className='productButtonWrapper'>
                <button disabled={isInCart} className='productButton' onClick={()=>addingSpecificProduct(specificProduct.id)}>Add To My Cart</button>
                </div>
            </div> 
            : 
            <div>loading...</div>
        }
      
      </>
    
  )
}

export default ProductDetails
