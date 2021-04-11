import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";

import '../Styles/pages.css'


const productImages = require.context( '../Assets', true )

export const CartPage = () => {
  
  const {dispatch} = useContext(ProductContext)
  const {products} = useContext(ProductContext)

  const {id} = products

  const handleDelete = (productId) => {
     const action = {
       type: 'deleteProduct',
       payload: productId
     }

     dispatch(action)
  }
  
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
                      
                        <td>{product.productTitle}</td>
                        <td></td>
                        <td>{product.price}</td>
                        <td></td>
                    
                    </tbody>
                  </table>

                   <i 
                    onClick = {() => handleDelete(id)}
                    className="fas fa-trash-alt"></i>
               </li> 
               
              

               ))
          }
        </ul>
        
       
 
          <Link to = '/information'><button className = 'btn'> Pagar  </button></Link>

          </div>


       }

      
    </div>
     
    )
    
};