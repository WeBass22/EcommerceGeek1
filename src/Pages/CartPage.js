import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TableCart } from "../Components/CartUi/TableCart";

import { ProductContext } from "../Context/ProductContext";


import '../Styles/pages.css'




export const CartPage = () => {
  
  const {products} = useContext(ProductContext)
  
  return(
  
    <div className = 'cart__container'> 

       {
          products.length === 0 ? <h1>No tienes elementos agregados</h1> :

          

          <div>
          
          <ul>
            {
             products.map(product => (
              <TableCart 
                  key = {product.id}
                  url = {product.id} 
                  title = {product.productTitle}      
                  cantidad = {product.cantidad}
                  price = {product.price}     
              />
             ))
          }
         
        </ul>
        
       
          <small>Total a pagar:</small>
          <Link to = '/information'><button className = 'btn'> Pagar </button></Link>

          </div>


       }

      
    </div>
     
    )
    
};