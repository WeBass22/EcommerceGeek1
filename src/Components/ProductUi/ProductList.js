  
import React from 'react';
import {ProductCard} from './ProductCard'
import {productByGender} from '../../Selectors/productByGender'



export const ProductList = ({gender}) => {

  const products = productByGender(gender) 

    return (
        <div className = 'product__showProduct'>
           {
               products.map( product => (
                   <ProductCard
                        key={product.id }
                        { ...product }
                    />
                   
               ))
           } 
        </div>
    )
        }