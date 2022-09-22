import React from "react"
import '../css/logocomponente.css';
import logoimg from '../img/freecodecamplogo.png';

//componente devulto con funcion flecha
const Logocomponente = () => {
  return (
    <div className='logo-contenedor'>
        < img src={logoimg} 
          className='logo-img'
          alt = 'freecodecamp logo'
        />
    </div>
   );  
};

export default Logocomponente;
