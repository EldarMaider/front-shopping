import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { BsCart2 } from 'react-icons/bs';
import {SlMagnifier} from 'react-icons/sl'
import './Header.css'

function Header({cartProducts, filterProducts,filterByCategory}) {
  return (
    <div>
      <nav>
        <div className='headerStyle'>
          <h1 className='title'>ShopEase</h1>
          <div className="search-container">
            <input className="inputSearch" placeholder='search product'  type="text" onChange={(e)=>filterProducts(e.target.value)}/>
            <SlMagnifier className='searchIcon'/>
          </div>
        </div>
        <div>
        <ul className="navbarWrapper">
          <li><NavLink to='/'>All Products</NavLink></li>
          <li><NavLink to='/phones'>Phones</NavLink></li>
          <li><NavLink to='/computers'>Computers</NavLink></li>
          <li><NavLink to='/tablets'>Tablets</NavLink></li>
          <div className="addProductAndCartWrapper">
            <li><NavLink to='/add_product'>Add product</NavLink></li>
            <li><NavLink className='cartStyle' to='/cart'>My Cart <div className='circleProducts'>{cartProducts.length ? cartProducts.reduce((total, oneProduct) => total + oneProduct.amount, 0) : 0}</div><BsCart2 className='cartIcon'/></NavLink></li>
          </div>
        </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
