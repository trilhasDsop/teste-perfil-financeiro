import React from 'react';
import style from '../../styles/components/buttonTop.module.scss';

const ButtonToTop = () => {
   const [visivel, setVisivel] = React.useState(false);
   
   React.useEffect(() => {
      function handleScroll(){
         if(window.scrollY >= 800){
            setVisivel(true);
         }
         else{
            setVisivel(false);
         }
      }
      window.addEventListener('scroll', handleScroll);
 
      return () => {
         window.removeEventListener('scroll', handleScroll);
      }
   }, []);
 
   function handleClick(event){
     event.preventDefault();
     window.scrollTo(0, 0);
   }
 
   return (
      <a
         className={style.container__buttontop}
         style={{display: `${visivel ? 'flex' : 'none'}`}}
         onClick={handleClick}
      >
         <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5" stroke="#000000" strokeWidth="2"  strokeLinecap="round" strokeLinejoin="round"/>

            <path d="M5 12L12 5L19 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
         </svg>
     </a>
   )
}
 
export default React.memo(ButtonToTop);