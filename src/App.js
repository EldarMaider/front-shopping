import React, {useState,useEffect} from 'react'
import Products from './components/Products'
import Product from './components/Product'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Cart from './components/Cart'

function App() {
  const [allProducts, setAllProducts] = useState(null)

  useEffect(() => {
    const getProducts = async () => {
      try {
        await fetch("https://shopping-k6qe.onrender.com/products/")
        .then(response => response.json)
        .then(json => (json))
      }
      catch(error) {
        console.log(error)
      } 
    }
    getProducts();
  },[])

  const deleteFromCart = (productId) => {
    setAllProducts((prevProducts)=>prevProducts.filter((singleProduct)=>singleProduct.id !== productId))
  }


  const addToCart = (productToAdd) => {
    setAllProducts((prevList)=>[...prevList,productToAdd])
  }

  return (
    <div className="app">
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Products allProducts={allProducts} addToCart={addToCart}/>}/>
        <Route path="/cart" element={<Cart deleteFromCart={deleteFromCart}/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
