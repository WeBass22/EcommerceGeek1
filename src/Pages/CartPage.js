import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

import '../Styles/pages.css'


const productImages = require.context( '../Assets', true )

export const CartPage = () => {
  
  const {products} = useContext(ProductContext)
  
  return(
  
    <div className = 'cart__container'> 

       {
          products.length === 1 ? <h1>No tienes elementos agregados</h1> :

          

          <div>
          <ul>
          {
             products.map(product => (
               <li key = {product.id}>
                  <table>
                    <thead>
                      
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Sub Total</th>
                    
                    </thead>
                    <tbody>
                      
                        <td><img src = {productImages(`./${product.id}.jpg`) } /></td>
                        <td>2</td>
                        <td>{product.price}</td>
                        <td>Sub Total</td>
                    
                    </tbody>
                  </table>
               </li>
               ))
          }
        </ul>

 
          <button className = 'btn'> Pagar  </button>

          </div>


       }

      
    </div>
     
    )
    
};