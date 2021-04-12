import React from "react";
import { useForm } from "../Hooks/useForm";

export const InformationPage = () => {

  const [values, handleInputChange] = useForm({
    name: '',
    email: '',
    tarjeta: '',
    fecha: ''
  })

  const {name, email, tarjeta, fecha} = values

  return(
   <div className = 'information__container'>
   <h3>Información de Pago</h3>
   

   <form>

       <input 
           type = 'text'
           placeholder = 'Nombre completo'
           value = {name}
           name = 'name'
           onChange = {handleInputChange}
           
           />

       <input 
           type = 'text'
           placeholder = 'Correo Electronico'
           value = {email}
           name = 'email'
           onChange = {handleInputChange}
           
           />

       <input 
           type = 'text'
           placeholder = 'Nro. de Tarjeta'
           value = {tarjeta}
           name = 'tarjeta'
           onChange = {handleInputChange}
           
           />

       <input 
           type = 'text'
           placeholder = 'F. Vencimiento MM/AA'
           value = {fecha}
           name = 'fecha'
           onChange = {handleInputChange}
           
           />

        <button
              className = 'btn'
             >PAGAR</button>



   </form>
   </div>
 )
};
