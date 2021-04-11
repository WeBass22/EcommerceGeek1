import React from "react";
import {GenderBar} from '../Components/GenderBar'

import '../Styles/pages.css'


export const ProductPage = () => {
  return( 
   <>
    <div className = 'product__container' >


      <GenderBar />
      <div className = 'product__images'>

      <img src = '../Assets/mujeres.jpg' alt = 'mujeres'/>
      <img src = '../Assets/hombres.jpg' alt = 'hombres' />

      </div >

  </div >
      
   </>
  )
};
