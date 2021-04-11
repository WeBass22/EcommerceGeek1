import React from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import {productById} from '../Selectors/productById'

export const ProductDetails = () => {
  
  const {id} = useParams()

  const product = productById(id)
  console.log(product)

if(!product){
   return <Redirect to = '/' />
}

 // const {title, price, color} = products
  
  return  (
    <p>Ejemplo</p>
)
};