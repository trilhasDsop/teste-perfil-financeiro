import React from 'react';
import ilustracao from '../../assets/img/Ilustracao2.svg';
import styleHome from '../../styles/page/home.module.scss';
import Radio from '../../Components/Radio/Radio';
import Titulo from '../../Components/Titulo/Titulo';

import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../Context/dataContext';
import Snackbar from '../../Components/Snackbar/Snackbar';
import Wizard from '../../Components/Wizard/Wizard';
 
const Home = () => {
  const navigate = useNavigate();
  const { 
    questoes,
    setResultado, 
    respostas, 
    setRespostas 
  } = React.useContext(DataContext);
  const [snackbar, setSnackBar] = React.useState(false);
  const [pontos, setPontos] = React.useState({});
  const [email, setEmail] = React.useState('');
  const [checkbox, setCheckBox] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(170, 0);
  }, []);

  function handleChange(questao, alternativa, id){
    setRespostas({...respostas, [id]: [id, questao, alternativa]})
    setPontos({...pontos, [id]: alternativa.pontos})
  }

  function handleClick(e){
    e.preventDefault();

    if(respostas.p1 && respostas.p2 && respostas.p3 && respostas.p4 && respostas.p5 && respostas.p6 && respostas.p7 && respostas.p8 && respostas.email && respostas.termos){
      const pontuacao = Object.values(pontos).reduce((acc, atual) => acc+atual); 
      setResultado(pontuacao);

      if(pontuacao){
        navigate('/resultado')
      }
    }
    else{
      setSnackBar(true);
    }
  }

  return (
    <>
      <main className={styleHome.main__home}>
        <div className={styleHome.main__homeContainer}>
          <div className={styleHome.main__home__divTexto}>
            <h1>Teste de Perfil Financeiro</h1>
            <p>Faça um diagnóstico do seu perfil financeiro e descubra com qual playlist você deve começar.</p>
          </div>

          <div className={styleHome.main__home__divImg}>
            <img width={567} height={567} src={ilustracao} alt="imagem ilustrativa de teste de perfil"/>
          </div>
        </div>
      </main>

      <section className={styleHome.section1__home}>
        <Titulo>Inicie seu questionário</Titulo>

        <form className={styleHome.section1__homecontainer}>
          {questoes?.map((q) => (
            <Radio 
              key={q.id}
              valor={respostas[q.id][2]?.texto}
              onchange={handleChange}
              {...q}
            />
          ))}

          <div className={styleHome.section1__home__divemail}>
            <h2>Receba o resultado completo por seu endereço de e-mail.</h2>
            <label htmlFor="email">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5 18L14.8571 12M9.14286 12L2.50003 18M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z" stroke="#12FF00" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={email}
                placeholder='Digite seu E-Mail' 
                onChange={({target}) => {
                  setEmail(target.value)
                  setRespostas({...respostas, ["email"]: target.value})
                }}
              />
            </label>
          </div>

          <div className={styleHome.section1__home__divbutton}>
            <label htmlFor="acordo--email">
              <input 
                type="checkbox" 
                name='acordo--email' id="acordo--email" 
                value="termos"
                checked={checkbox}
                onChange={({target}) => {
                  setCheckBox(target.checked)
                  setRespostas({...respostas, ["termos"]: target.checked})
                }}
              />
              Estou de acordo em receber o resultado no meu e-mail.
            </label>
            <div>
              <a href="/">Resetar</a>
              <button onClick={handleClick}>Enviar</button>
            </div>
          </div>
        </form>
      </section>

      <Wizard setSnackBar={setSnackBar} />

      {snackbar && (<Snackbar ativarSnackar={setSnackBar} />)}
    </>
  )
}

export default Home