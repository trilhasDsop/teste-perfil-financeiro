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

  function handleChange(questao, alternativa, id){
    setRespostas({...respostas, [id]: [id, questao, alternativa]})
    setPontos({...pontos, [id]: alternativa.pontos})
  }

  function handleClick(e){
    e.preventDefault();

    if(respostas.p1 && respostas.p2 && respostas.p3 && respostas.p4 && respostas.p5 && respostas.p6 && respostas.p7 && respostas.p8){
      const pontuacao = Object.values(pontos).reduce((acc, atual) => acc+atual); 
      setResultado(pontuacao);

      if(pontuacao){
        navigate('/resultado');
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

          <div className={styleHome.section1__home__divbutton}>
            <a href="/">Resetar</a>
            <button onClick={handleClick} type='button'>Enviar</button>
          </div>
        </form>
      </section>

      <Wizard setSnackBar={setSnackBar} />

      {snackbar && (<Snackbar ativarSnackar={setSnackBar} />)}
    </>
  )
}

export default Home