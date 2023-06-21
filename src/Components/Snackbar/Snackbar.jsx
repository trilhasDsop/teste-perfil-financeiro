import React from 'react';
import style from '../../styles/components/snackbar.module.scss';

const Snackbar = ({ativarSnackar}) => {
   return(
      <div className={style.snackbar}>
         <div className={style.snackbar__container}>
            <button onClick={() => ativarSnackar(false)}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="#12FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6L18 18" stroke="#12FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </button>
            <p>Você deve completar seu questionário para passar para as próximas etapas</p>
         </div>
      </div>
   )
}

export default Snackbar