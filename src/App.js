import React, {useState,useEffect} from 'react'
import Products from './components/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Cart from './components/Cart'
import Message from './components/Message'
import ProductsByCategory from './components/ProductsByCategory'
import ProductDetails from './components/ProductDetails'
import AddProduct from './components/AddProduct'

function App() {
  const [allProducts, setAllProducts] = useState([])
  const [cartProducts,setCartProducts] = useState([])
  const [listOfAllProducts, setListOfAllProducts] = useState([])
  const [loading, setLoading] = useState(false)  
  const [showMessage,setShowMessage] = useState(false) 
  const [message,setMessage] = useState({text:"",color:""})

  const CATEGORY_CHOICES = {
    general: 'General',
    phones: 'Phones',
    computers: 'Computers',
    tables: 'Tablets',
  }

  const deleteItemForSure = (productId) => {
    //fetch to delete in django
    setCartProducts((prevProducts)=>prevProducts.filter((singleProduct)=>singleProduct.id !== productId))
    setShowMessage(true)
    setMessage({text: 'Item deleted from your cart',color: 'red'})
  }

  const decreaseAmount = (productID) =>{
    setCartProducts((prevList)=>prevList.map((singleProduct)=>singleProduct.id === productID?{...singleProduct,amount:singleProduct.amount-=1}:singleProduct))
  }

  const increaseAmount = (product) =>{
    setCartProducts((prevList)=>prevList.map((singleProduct)=>singleProduct.id === product.id?{...singleProduct,amount:singleProduct.amount+=1}:singleProduct))
  
  }

  const addToCart = (productId) => {
    const productToAdd = allProducts.find((singleProduct)=>singleProduct.id === productId)
    productToAdd.amount = 1;
    setCartProducts((prevList)=>[...prevList,productToAdd])
    setShowMessage(true)
    setMessage({text: 'Item added to your cart',color: 'green'})
  }

  const deleteCart = () => {
    setShowMessage(true)
    setCartProducts([])
    setMessage({text: 'All items deleted from cart',color: 'red'})
    
  }

  const AddUserProduct = (productToAdd) => {
    setAllProducts((prevList)=>[...prevList, productToAdd])
  }

  const submitOrder = () => {
    setShowMessage(true)
    setCartProducts([])
    setMessage({text: 'Thank you! your order will arive by mail',color: 'green'})
  }

  const HideMessage = () => {
    setShowMessage(false)
  }

  const filterProducts = (text) => {
    if (text){
      setAllProducts(listOfAllProducts.filter((singleProduct)=> { 
        const nameToLowerCase =singleProduct.name.toLowerCase()
        return nameToLowerCase.includes(text.toLowerCase())
      }));
    }
    else{
      setAllProducts(listOfAllProducts)
    }
  }

  const filterByCategory = (category) => {
    setAllProducts(listOfAllProducts.filter((singleProduct)=> {
      console.log(singleProduct.category, category, singleProduct.category === category)
      return singleProduct.category === category
    }))
  }

  useEffect(() => {
    setShowMessage(false)
    const getProducts = async () => {
      try {
        //const res = await fetch("https://shopping-back-6kec.onrender.com/products/")
        setLoading(true)
        const res = await fetch("http://127.0.0.1:8000/products/")
        const data = await res.json()
        setAllProducts(data)
        setListOfAllProducts(data)
        setLoading(false)
      }
      catch(error) {
        console.log(error)
      } 
    }
    getProducts();
  },[])

  if(loading) {
    return <div>loading data</div>;
  }

  return (
    <div className="app">
    <BrowserRouter>
      <Header cartProducts={cartProducts} filterProducts={filterProducts}/>
      {showMessage && <Message HideMessage={HideMessage} message={message}/>}
      <Routes>
        <Route path="/" element={<Products allProducts={allProducts} addToCart={addToCart} cartProducts={cartProducts} />}/>
        <Route path="/cart" element={<Cart increaseAmount={increaseAmount} decreaseAmount={decreaseAmount} deleteItemForSure={deleteItemForSure} deleteCart={deleteCart} cartProducts={cartProducts} submitOrder={submitOrder}/>} />
        <Route path='/phones' element={<ProductsByCategory products={allProducts} addToCart={addToCart} cartProducts={cartProducts} categoryName={CATEGORY_CHOICES.phones} />} />
        <Route path='/computers' element={<ProductsByCategory products={allProducts} addToCart={addToCart} cartProducts={cartProducts} categoryName={CATEGORY_CHOICES.computers} />} />
        <Route path='/tablets' element={<ProductsByCategory products={allProducts} addToCart={addToCart} cartProducts={cartProducts} categoryName={CATEGORY_CHOICES.tables} />} />
        <Route path="/products/:id" element={<ProductDetails addToCart={addToCart} cartProducts={cartProducts}/>} />
        <Route path='/add_product' element={<AddProduct AddUserProduct={AddUserProduct} setMessage={setMessage} setShowMessage={setShowMessage}/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
