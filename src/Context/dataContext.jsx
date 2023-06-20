import React from 'react';

export const DataContext = React.createContext();

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

const User = ({children}) => {
   const [respostas, setRespostas] = React.useState({
      p1: '',
      p2: '',
      p3: '',
   });
   const [resultado, setResultado] = React.useState(0);
   
   return (
      <DataContext.Provider value={{
         questoes,
         resultado,
         setResultado,
         respostas,
         setRespostas
      }}>
         {children}
      </DataContext.Provider>
   )
}

export default User