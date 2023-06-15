import React from 'react'

const questoes = [
  {
    'id': 'p1',
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
    'id': 'p2',
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
    'id': 'p3',
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
];

export const Playlist = () => {
  //É possivel utilizar reduce
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
  });
  
  function handleChange(questao, alternativa, target){
    setRespostas({...respostas, [target.id]: [target.id, questao, alternativa]})
  }

  function handleClick(e){
    e.preventDefault()
  }

  return(
    <form style={{color: '#fff', display: 'flex', flexDirection: 'column', gap: '50px', maxWidth: '900px', margin: '0 auto'}} >
      {questoes.map((q) => (
        <Radio 
          key={q.id}
          valor={respostas[q.id][2]?.texto}
          onchange={handleChange}
          {...q}
        />
      ))}
      
      {/* <button onClick={handleClick}>Enviar</button> */}
    </form>
  )
}

function Radio({id, questao, alternativas, onchange, valor}){
  return(
    <div>
      <h2 style={{marginBottom: '20px'}}>{questao}</h2>
      {alternativas?.map((alternativa) => (
        <label key={alternativa.texto} 
          style={{
            display: 'flex', gap: '13px', marginTop: '10px', border: '2px solid green', padding: '12px 30px', borderRadius: '10px'
          }}
        >
          <input 
            type='radio'
            id={id}
            checked={valor === alternativa.texto}
            value={alternativa.texto}
            onChange={({target}) => onchange(questao, alternativa, target)}
            //style={{appearance: 'none', margin: 0, padding: 0}}
          />
          <span>{alternativa.letra}</span> {alternativa.texto}
        </label>
      ))}
    </div>
  )
}

/*
codigo antigo
const [letra, setLetra] = React.useState('');
  const [resultado, setResultado] = React.useState([]);
  const [pontos, setPontos] = React.useState(0);

  console.log(resultado)

  return (
    <>
      <h1>Página de Playlist</h1>
      <form style={{color: '#fff', display: 'flex', flexDirection: 'column', gap: '50px', maxWidth: '900px', margin: '0 auto'}}>
        {questoes && questoes.map((q, index) => (
          <div key={index}>
            <h2 style={{color: '#fff', marginBottom: '20px'}}>{q.questao}</h2>
              {q.alternativas.map((alternativa, i) => (
                <label key={i} style={{display: 'flex', gap: '13px', marginTop: '10px'}}>
                  <input 
                    type='radio' 
                    value={alternativa.texto} 
                    checked={letra === alternativa.texto}
                    onChange={({target}) => {
                      //target.checked ? target.classList.add('ativo') : target.classList.remove('ativo') 
                      setLetra(target.value);
                      setResultado((prev) => [...prev, {questao: q.questao, alternativa}]);
                    }}
                    
                  />
                  <span>{alternativa.letra}</span>
                  {alternativa.texto} 
                </label>
              ))}
          </div>
        ))}
      </form>

      <p>{pontos}</p>
    </>
  )
*/