import React from 'react';
import styleHome from '../../styles/page/home.module.scss';

const Radio = ({id, questao, alternativas, onchange}) => {
  const [radio, setRadio] = React.useState('');

  function handleRadioChange(target, alternativa){
    setRadio(target.value);
    onchange(questao, alternativa, id);
  }

  return(
  <article className={styleHome.section1__home__article}> 
    <h2>{questao}</h2>
    {alternativas?.map((alternativa) => (
      <label key={alternativa.texto} htmlFor={alternativa.id}
      className={
        radio === alternativa.id 
        ? styleHome.section1__home__articleQuestoesChecked
        : styleHome.section1__home__articleQuestoes
      }>
        <input 
          type='radio'
          id={alternativa.id}
          checked={radio === alternativa.id}
          value={alternativa.id}
          onChange={({target}) => handleRadioChange(target, alternativa)}
          style={{appearance: 'none', margin: 0, pointerEvents: 'none'}}
        />
        <span>{alternativa.letra}</span>{alternativa.texto}
      </label>
    ))}
  </article>
  )
}

export default Radio;