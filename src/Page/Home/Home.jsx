import React from 'react';
import ilustracao from '../../assets/img/Ilustracao2.svg';
import styleHome from '../../styles/page/home.module.scss';

const questoes = [
   {
      'questao': 'O que você ganha por mês é suficiente para arcar com os seus gastos?',
      'alternativas': [
         {
            'letra': 'A',
            'texto': 'É suficiente, mas não sobra nada.',
            'pontos': 5 
         },
         {
            'letra': 'B',
            'texto': 'Consigo pagar minhas contas e ainda guardo mais 10% dos meus ganhos todo mês.',
            'pontos': 10 
         },
         {
            'letra': 'C',
            'texto': 'Gasto todo o meu dinheiro e ainda uso o limite de cheque especial ou peço emprestado para parentes e amigos.',
            'pontos': 0 
         }
      ]
   },
   {
      'questao': 'Você tem conseguido pagar suas despesas em dia e à vista?',
      'alternativas': [
         {
            'letra': 'A',
            'texto': 'Sempre parcelo os meus compromissos e utilizo linhas de crédito como cheque especial, cartão de crédito e crediário.',
            'pontos': 0 
         },
         {
            'letra': 'B',
            'texto': 'Pago em dia, à vista e, em alguns casos, com bons descontos.',
            'pontos': 10 
         },
         {
            'letra': 'C',
            'texto': 'Quase sempre, mas tenho que parcelar as compras de maior valor.',
            'pontos': 5 
         }
      ]
   },
   {
      'questao': 'Você realiza seu orçamento financeiro mensalmente?',
      'alternativas': [
         {
            'letra': 'A',
            'texto': 'Somente registro o realizado, sem analisar os gastos.',
            'pontos': 5 
         },
         {
            'letra': 'B',
            'texto': 'Não faço o meu orçamento financeiro.',
            'pontos': 0 
         },
         {
            'letra': 'C',
            'texto': 'Faço periodicamente e comparo o orçado com o realizado.',
            'pontos': 10 
         }
      ]
   },
]

export const Home = () => {
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
            <div className={styleHome.section1__homecontainer}>
               <h1>Inicie seu questionário
                  <svg width="18" height="5" viewBox="0 0 18 5" fill="none" xmlns="http: www.w3.org/2000/svg">
                     <path d="M1 1L9 3L17 1" stroke="#12FF00" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
               </h1>

               <article className={styleHome.section1__home__article}>
                  <h2>O que você ganha por mês é suficiente para arcar com os seus gastos?</h2>
                  <ul className={styleHome.section1__home__articleQuestoes}>
                     <li>
                     <span>A</span> Consigo pagar meus gastos e ainda guardo parte dos meus ganhos.
                     </li>
                     <li>
                     <span>B</span> É suficiente, mas não sobra nada.
                     </li>
                     <li>
                     <span>C</span> Gasto todo o meu dinheiro e ainda utilizo linhas de crédito para cumprir com meus compromissos do mês.
                     </li>
                  </ul>
               </article>

               <article className={styleHome.section1__home__article}>
                  <h2>O seu seguro de vida é suficiente para garantir sua independência financeira e/ou invalidez?</h2>
                  <ul className={styleHome.section1__home__articleQuestoes}>
                     <li>
                     <span>A</span> Consigo pagar meus gastos e ainda guardo parte dos meus ganhos.
                     </li>
                     <li>
                     <span>B</span> É suficiente, mas não sobra nada.
                     </li>
                     <li>
                     <span>C</span> Gasto todo o meu dinheiro e ainda utilizo linhas de crédito para cumprir com meus compromissos do mês.
                     </li>
                  </ul>
               </article>

               <article className={styleHome.section1__home__article}>
                  <h2>Você realiza seu orçamento financeiro?</h2>
                  <ul className={styleHome.section1__home__articleQuestoes}>
                     <li>
                     <span>A</span> Não faço meu orçamento financeiro.
                     </li>
                     <li>
                     <span>B</span> Somente registro o realizado mas não faço qualquer análise.
                     </li>
                     <li>
                     <span>C</span> Faço periodicamente, analiso e comparo o orçado com o realizado.
                     </li>
                  </ul>
               </article>

               {/* {
                  questoes && questoes.map((q, index) => (
                     <article key={index} className={styleHome.section1__home__article}>
                        <h2>{q.questao}</h2>
                        {q.alternativas.map((alternativa, i) => (
                           <ul key={i} className={styleHome.section1__home__articleQuestoes}>
                              <li><span>{alternativa.letra}</span>
                                 {alternativa.texto}
                              </li>
                           </ul>
                        ))}
                        
                     </article>
                  ))
               } */}


               <div className={styleHome.section1__home__divbutton}>
                  <a href="#">Resetar</a>
                  <a href="resultado">Enviar</a>
               </div>
            </div>
         </section>

         <div className={styleHome.divelipse}></div>
      </>
   )
}