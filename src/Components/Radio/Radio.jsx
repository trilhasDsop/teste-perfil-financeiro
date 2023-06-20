import React from 'react';
import styleHome from '../../styles/page/home.module.scss';

export const Radio = ({id, questao, alternativas, onchange, valor}) => {
  const container = React.useRef(null);

  function clickItem(target){
    const articleArray = Array.from(container.current.children)
    
    articleArray.forEach((element) => {
      if(element.classList.contains(`ativo${target.tagName}`)){
        element.style.cssText = `
          color: #fff;
          background-color: transparent;
          font-family: Gilroy-medium, sans-serif;
        `;
        element.children[1].style.color =  '#12FF00';
        element.classList.remove(`ativo${target.tagName}`)
      }
      element.classList.remove(`ativo${target.tagName}`) 
    })
  
    target.parentElement.classList.add(`ativo${target.tagName}`); 
    target.style.cssText = `
      color: #000 !important;
      background-color: #12FF00;
      appearance: none;
      font-family: Gilroy-bold, sans-serif;
    `;
    target.children[1]?.tagName === 'SPAN' ? target.children[1].style.color = '#000' : null;
  }

  return(
    <article ref={container} className={styleHome.section1__home__article}> 
      <h2>{questao}</h2>
      {alternativas?.map((alternativa) => (
        <label key={alternativa.texto} className={styleHome.section1__home__articleQuestoes} onClick={({target}) => clickItem(target)}>
          <input 
            type='radio'
            id={alternativa.id}
            checked={valor === alternativa.texto}
            value={alternativa.texto}
            onChange={() => onchange(questao, alternativa, id)}
            style={{appearance: 'none', margin: 0, pointerEvents: 'none'}}
          />
          <span>{alternativa.letra}</span>{alternativa.texto}
        </label>
      ))}
    </article>
  )
}