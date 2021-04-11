  
import React from 'react';
import { Link } from 'react-router-dom';


export const ProductCard = ({
    id,
    productTitle,
    price,
    color,
}) => {

    return (
        < div className = 'product__card' >
            <img src={`../Assets/${id}.jpg` } alt={ productTitle } />
            <h5 > { productTitle } </h5>
            <p > {price} </p>
             <p >
                 <small > { color } </small>
            </p>
            <button className = 'btn'>                               
             <Link to={ `/products/${ id }` }>
                            Más...
            </Link>
            </button>

        </div>

    )

}