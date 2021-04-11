import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ProductContext } from "../Context/ProductContext";


import '../Styles/navbar.css'


export const NavBar = () => {
  
    const {products} = useContext(ProductContext)
  
    return (
        <nav className = 'nav__navbar'>
           <ul>
               <li><Link to = '/'>Home</Link></li>
               <li><Link to = '/products'>Products</Link></li>
               <li><Link to = '/cart'><i className="fas fa-cart-plus"><span>{products.length - 1}</span></i></Link></li>
           </ul> 
        </nav>
    )
}
