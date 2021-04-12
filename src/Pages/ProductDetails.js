import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import { useForm } from "../Hooks/useForm";
import { productById } from '../Selectors/productById'

import '../Styles/pages.css'

export const ProductDetails = ({ history }) => {
    
    
    const [{cantidad}, handleInputChange] = useForm({
        cantidad: 1
    })

    const {dispatch} = useContext(ProductContext)

    const {id} = useParams()

    const product = productById(id)
    console.log(product)

    if (!product) {
        return <Redirect to = '/' />
    }

    const {productTitle, price, color} = product

    const handleAdd = (e) => {
        e.preventDefault()

        const addProduct = {
            id,
            productTitle, 
            price, 
            cantidad
        }

       const action = {
           type: 'addProduct',
           payload: addProduct
       }

       dispatch(action)
    }

    
    console.log(history)

    const handleReturn = () => {

        if( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }

    }


    
    
   
    return ( 
      <div className = 'product__productDetailsPage'>
       <div className = 'product__productDetailsPageImg'>
        <img src = { `../Assets/${id}.jpg` }/> 
      </div>
      <div className = 'product__productDetailsPageInfo'>
        <h3>{productTitle}</h3>
        <small>Precio: ${price}</small>
        <small>Color: {color}</small>

        <div>
           <input 
               type = 'text'
               placeholder = '1'
               value = {cantidad}
               name = 'cantidad'
               onChange = {handleInputChange}
               autocomplete = 'off'
           />
           <button
              className = 'btn'
              onClick = {handleAdd}
           >Agregar al carrito</button>
        </div>
     </div>

        <button 
           onClick = {handleReturn}
           className = 'btn'>Regresar</button>
    </div>
    )
};

