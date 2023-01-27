import React, {useState,useEffect} from 'react'
import Products from './components/Products'
import Product from './components/Product'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Cart from './components/Cart'

function App() {
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    fetch("https://shopping-k6qe.onrender.com/products/")
    .then(response => response.json)
    .then(json => setAllProducts(json))
  },[])

  const deleteFromCart = (productId) => {
    setAllProducts((prevProducts)=>prevProducts.filter((singleProduct)=>singleProduct.id !== productId))
  }


  const addToCart = (productToAdd) => {
    setAllProducts((prevList)=>[...prevList,productToAdd])
  }

  return (
    <div calssName="app">
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Products addToCart={addToCart}/>}/>
        <Route path="/cart" element={<Cart deleteFromCart={deleteFromCart}/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
