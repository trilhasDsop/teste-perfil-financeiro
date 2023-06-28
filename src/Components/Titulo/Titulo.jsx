import React from 'react';
import tituloSection from '../../styles/components/titulo.module.scss'

const Titulo = React.memo(function Titulo({children}){
   return (
    <h1 className={tituloSection.titulosection}>{children}
      <svg width="18" height="5" viewBox="0 0 18 5" fill="none" xmlns="http: www.w3.org/2000/svg">
         <path d="M1 1L9 3L17 1" stroke="#12FF00" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </h1>
   )
})

export default Titulo