import React from 'react';
import stylewizard from '../../styles/components/wizard.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { DataContext } from '../../Context/dataContext';

const Wizard = ({setSnackBar}) => {
   const containerLink = React.useRef(null);
   const navigate = useNavigate()
   const { respostas, resultado } = React.useContext(DataContext);

   React.useEffect(() => {
      const arrayContainer = Array.from(containerLink.current.children)

      arrayContainer.forEach((c) => {
         if(c.classList.contains('active') && c.getAttribute('href') === '#/'){
            containerLink.current.classList.add('ativoContainer1');
         }

         if(c.classList.contains('active') && c.getAttribute('href') === '#/resultado'){
            containerLink.current.classList.add('ativoContainer2');
         }

         if(c.classList.contains('active') && c.getAttribute('href') === '#/playlist'){
            containerLink.current.classList.add('ativoContainer3');
         }
      })
   })

   function handleShowSnackbar(t){
      t.preventDefault();
      if(respostas.p1 && respostas.p2 && respostas.p3 && respostas.p4 && respostas.p5 && respostas.p6 && respostas.p7 && respostas.p8 && respostas.email && respostas.termos && resultado){
         if(t.target.getAttribute('href') === '#/resultado'){
            navigate('/resultado')
         }

         if(t.target.getAttribute('href') === '#/playlist'){
            navigate('/playlist')
         }
      }
      else{
         setSnackBar(true);
      }
   }

   return (
      <div className={stylewizard.wizard}>
         <div className={stylewizard.wizard__container} ref={containerLink}>
            <NavLink to="/" className={stylewizard.wizard__wizarditem} aria-label='Faça o questionário para o próximo passo'>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_27_249)">
                     <path d="M3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7ZM3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7Z" fill="#7D7D7D"/>
                  </g>
                  <defs>
                     <clipPath id="clip0_27_249">
                        <rect width="24" height="24" fill="white"/>
                     </clipPath>
                  </defs>
               </svg>
               <div className={stylewizard.wizard__wizarditem__divtexto}>
                  <p>Você está aqui</p>
                  <p>Complete o questionário para o próximo passo.</p>
               </div>
            </ NavLink>

            <NavLink to="/resultado" className={stylewizard.wizard__wizarditem} aria-label='Resultado do seu questionário' onClick={(target) => handleShowSnackbar(target)}>
               <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2C22 3.1 21.1 4 20 4C19.82 4 19.65 3.98 19.49 3.93L15.93 7.48C15.98 7.64 16 7.82 16 8C16 9.1 15.1 10 14 10C12.9 10 12 9.1 12 8C12 7.82 12.02 7.64 12.07 7.48L9.52 4.93C9.36 4.98 9.18 5 9 5C8.82 5 8.64 4.98 8.48 4.93L3.93 9.49C3.98 9.65 4 9.82 4 10C4 11.1 3.1 12 2 12C0.9 12 0 11.1 0 10C0 8.9 0.9 8 2 8C2.18 8 2.35 8.02 2.51 8.07L7.07 3.52C7.02 3.36 7 3.18 7 3C7 1.9 7.9 1 9 1C10.1 1 11 1.9 11 3C11 3.18 10.98 3.36 10.93 3.52L13.48 6.07C13.64 6.02 13.82 6 14 6C14.18 6 14.36 6.02 14.52 6.07L18.07 2.51C18.02 2.35 18 2.18 18 2C18 0.9 18.9 0 20 0C21.1 0 22 0.9 22 2Z" fill="#7D7D7D"/>
               </svg>
               <div className={stylewizard.wizard__wizarditem__divtexto}>
                  <p>Resultados</p>
                  <p>Complete o questionário para obter seus resultados.</p>
               </div>
            </NavLink>

            <NavLink to="/playlist" className={stylewizard.wizard__wizarditem} aria-label='Sua playlist de séries' onClick={(target) => handleShowSnackbar(target)}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_50_386)">
                     <path d="M4 10H16V12H4V10ZM4 6H16V8H4V6ZM4 14H12V16H4V14ZM14 14V20L19 17L14 14Z" fill="#7D7D7D"/>
                  </g>
                  <defs>
                     <clipPath id="clip0_50_386">
                        <rect width="24" height="24" fill="white"/>
                     </clipPath>
                  </defs>
               </svg>
               <div className={stylewizard.wizard__wizarditem__divtexto}>
                  <p>Playlist</p>
                  <p>Sua playlist estará pronta ao final do teste.</p>
               </div>
            </NavLink>
         </div>
      </div>
   )
}

export default Wizard