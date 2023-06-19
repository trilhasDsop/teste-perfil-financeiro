import React from 'react'
import styleHome from '../../styles/page/home.module.scss';

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

export const Playlist = () => {
  //É possivel utilizar reduce
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
      setResultado([{resultado: perfil(pontuacao)}]);
      console.log(respostas, pontuacao)
    }
    else{
      console.log('não exite, ativar Snackbar')
    }
  }

  return(
    <form style={{color: '#fff', display: 'flex', flexDirection: 'column', gap: '50px', maxWidth: '900px', margin: '0 auto'}}>
      {questoes?.map((q) => (
        <Radio 
          key={q.id}
          valor={respostas[q.id][2]?.texto}
          onchange={handleChange}
          {...q}
        />
      ))}

      <button onClick={handleClick} style={{marginBottom: '50px', padding: '24px'}}>Enviar</button>
      {resultado.length > 0 && (
        <p style={{color: '#fff', fontSize: '2rem', textAlign: 'center', marginBottom: '80px'}}>{resultado[0]?.resultado.perfil}</p>
      )}
    </form>
  )
}

function Radio({id, questao, alternativas, onchange, valor, refContainer, refItem, clickItem}){
  const container = React.useRef(null);

  React.useLayoutEffect(() => {
    /**const getInput = document.querySelectorAll('.ativoINPUT')

    getInput.forEach((input) => {
      input.style.backgroundColor = 'transparent';

      if(input.classList.contains('ativoINPUT')){
        input.style.backgroundColor = '#12FF00';
        input.style.color = 'black';
        //input.style.backgroundColor = 'transparent';
        console.log(input.classList.remove('ativoINPUT'))
        input.classList.remove('ativoINPUT')
      }
      else{
        input.style.backgroundColor = 'transparent';
        input.style.color = 'black';
      }
    }) */
  })

  function clickItem(target){
    const xxArray = Array.from(container.current.children)
    
    xxArray.forEach((element) => {
      if(element.classList.contains(`ativo${target.tagName}`)){
        element.style.backgroundColor = 'transparent';
        element.style.color = '#fff';
      }
     
      element.classList.remove(`ativo${target.tagName}`)
    })

    target.parentElement.classList.add(`ativo${target.tagName}`); 
    target.style.backgroundColor = '#12FF00';
    target.style.color = '#000';
  }

  return(
    <div ref={container} className={styleHome.texte}> 
      <h2 style={{marginBottom: '20px'}}>{questao}</h2>
      {alternativas?.map((alternativa) => (
        <label key={alternativa.texto} className={styleHome.labell} onClick={({target}) => clickItem(target)}       
        >
          <input 
            type='radio'
            id={alternativa.id}
            checked={valor === alternativa.texto}
            value={alternativa.texto}
            onChange={() => onchange(questao, alternativa, id)}
            style={{appearance: 'none', margin: 0, pointerEvents: 'none'}}
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