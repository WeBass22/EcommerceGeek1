import React, { useReducer } from "react";
import { ProductContext } from "./Context/ProductContext";
import { productReducer } from "./Reducers/productReducer";
import { AppRouter } from "./Routes/AppRouter";

export const App = () => {
  
  const state = [{}]

  const [products, dispatch] = useReducer(productReducer, state)
  console.log(products)
  
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
