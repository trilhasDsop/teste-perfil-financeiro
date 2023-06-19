import React from 'react';
import ilustracao from '../../assets/img/Ilustracao2.svg';
import styleHome from '../../styles/page/home.module.scss';
import { Radio } from '../../Components/Radio/Radio';
import { Titulo } from '../../Components/Titulo/Titulo';

import { useNavigate } from 'react-router-dom';

const questoes = [
   {
     'id': 'p1',
     'questao': 'O que você ganha por mês é suficiente para arcar com os seus gastos?',
     'alternativas': [
       {
         'id': 'p1A',
         'letra': 'A',
         'texto': 'É suficiente, mas não sobra nada.',
         'pontos': 5,
       },
       {
         'id': 'p1B',
         'letra': 'B',
         'texto': 'Consigo pagar minhas contas e ainda guardo mais 10% dos meus ganhos todo mês.',
         'pontos': 10,
       },
       {
         'id': 'p1C',
         'letra': 'C',
         'texto': 'Gasto todo o meu dinheiro e ainda uso o limite de cheque especial ou peço emprestado para parentes e amigos.',
         'pontos': 0,
       }
     ]
   },
   {
     'id': 'p2',
     'questao': 'Você tem conseguido pagar suas despesas em dia e à vista?',
     'alternativas': [
       {
         'id': 'p2A',
         'letra': 'A',
         'texto': 'Sempre parcelo os meus compromissos e utilizo linhas de crédito como cheque especial, cartão de crédito e crediário.',
         'pontos': 0 
       },
       {
         'id': 'p2B',
         'letra': 'B',
         'texto': 'Pago em dia, à vista e, em alguns casos, com bons descontos.',
         'pontos': 10 
       },
       {
         'id': 'p2C',
         'letra': 'C',
         'texto': 'Quase sempre, mas tenho que parcelar as compras de maior valor.',
         'pontos': 5 
       }
     ]
   },
   {
     'id': 'p3',
     'questao': 'Você realiza seu orçamento financeiro mensalmente?',
     'alternativas': [
       {
         'id': 'p3A',
         'letra': 'A',
         'texto': 'Somente registro o realizado, sem analisar os gastos.',
         'pontos': 5 
       },
       {
         'id': 'p3B',
         'letra': 'B',
         'texto': 'Não faço o meu orçamento financeiro.',
         'pontos': 0 
       },
       {
         'id': 'p3C',
         'letra': 'C',
         'texto': 'Faço periodicamente e comparo o orçado com o realizado.',
         'pontos': 10 
       }
     ]
   },
];
 
export const Home = () => {
   const navigate = useNavigate();
   const [respostas, setRespostas] = React.useState({
      p1: '',
      p2: '',
      p3: '',
   });
   const [pontos, setPontos] = React.useState({});
   const [resultado, setResultado] = React.useState([]);
  
   function handleChange(questao, alternativa, id){
      setRespostas({...respostas, [id]: [id, questao, alternativa]})
      setPontos({...pontos, [id]: alternativa.pontos})
   }
  
   function handleClick(e){
      e.preventDefault();
  
      if(respostas.p1 && respostas.p2 && respostas.p3){
        const pontuacao = Object.values(pontos).reduce((acc, atual) => acc+atual); 
        //setResultado([{resultado: perfil(pontuacao)}]);
        if(pontuacao){
         navigate('/resultado')
        }
      }
      else{
        console.log('não exite, ativar Snackbar')
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

         <div className={styleHome.divelipse}></div>
      </>
   )
}