import React, {useContext} from 'react'
import { ProductContext } from "../../Context/ProductContext";

import '../../Styles/pages.css'


export const TableCart = ({url, title, cantidad, price}) => {
  
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
    
  
    return (
        
          <li className = 'cart__tableProducts'>
            <table>
                    <thead>
                      <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Sub Total</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><img className = 'cart__imgTable' src = {`./Assets/${url}.jpg`} alt = {title} />   - {title}</td>
                        <td>{cantidad}</td>
                        <td>{price}</td>
                        <td>{cantidad * price}</td>
                        <td>    <i 
                    onClick = {() => handleDelete(id)}
                    className="fas fa-trash-alt"></i></td>
                      </tr>
                    </tbody>
                    

                   
               
                  </table>
             </li>
        
    )
}
