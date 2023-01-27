import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsCart2 } from 'react-icons/bs';


function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to='/'> All Products </NavLink></li>
          <li><NavLink to='/cart'> My Cart <BsCart2/> </NavLink></li>
          
        </ul>
      </nav>
    </div>
  )
}

export default Header
