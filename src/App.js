import React, { useEffect, useReducer } from "react";
import { ProductContext } from "./Context/ProductContext";
import { productReducer } from "./Reducers/productReducer";
import { AppRouter } from "./Routes/AppRouter";


const init = () => {
  return JSON.parse(localStorage.getItem('products')) || []
}

export const App = () => {

  
  

  const [products, dispatch] = useReducer(productReducer, [{}], init)

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])



  
  return(
    <div>
        <ProductContext.Provider value = {{
          products, 
          dispatch
          
        }}>
      <AppRouter />

      
      </ProductContext.Provider>
    </div>
  )
};
