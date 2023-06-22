import React from 'react';
import ilustracao from '../../assets/img/Ilustracao2.svg';
import styleHome from '../../styles/page/home.module.scss';
import { Radio } from '../../Components/Radio/Radio';
import { Titulo } from '../../Components/Titulo/Titulo';

import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../Context/dataContext';
import Snackbar from '../../Components/Snackbar/Snackbar';
 
export const Home = () => {
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
        navigate('/resultado')
      }
    }
    else{
      setSnackBar(true);
    }
  }

  console.log(respostas)

  return (
    <>
      <main className={styleHome.main__home}>
        <div className={styleHome.main__homeContainer}>
          <div className={styleHome.main__home__divTexto}>
            <h1>Teste de Perfil Financeiro</h1>
            <p>Vivamus tristique lorem ac dolor luctus faucibus. Curabitur magna orci, sodales ut lacus sed, pretium convallis augue. Nullam tincidunt a augue non rutrum. </p>
          </div>

          <div className={styleHome.main__home__divImg}>
            <img src={ilustracao} alt="imagem ilustrativa de teste de perfil"/>
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
              <button onClick={handleClick}>Enviar</button>
            </div>
        </form>
      </section>

      {snackbar && (<Snackbar ativarSnackar={setSnackBar} />)}

      <div className={styleHome.divelipse}></div>
    </>
  )
}