import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import { useForm } from "../Hooks/useForm";
import { productById } from '../Selectors/productById'

export const ProductDetails = () => {
    
    
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

    const {productTitle, price} = product

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

    
    
   
    return ( 
      <div>
        <img src = { `../Assets/${id}.jpg` }/> 
        <h3>{productTitle}</h3>
        <small>{price}</small>

        <div>
           <input 
               type = 'text'
               placeholder = '1'
               value = {cantidad}
               name = 'cantidad'
               onChange = {handleInputChange}
           />
           <button
              onClick = {handleAdd}
           >Agregar al carrito</button>
        </div>
    </div>
    )
};

