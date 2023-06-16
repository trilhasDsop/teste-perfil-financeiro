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

function perfil(pontuacao){
  if(pontuacao >= 0 && pontuacao <= 15){
    return ({
      perfil: 'Super endividado',
      descricao: `Muita calma nessa hora! Estar Superendividado, acredite, é o começo de uma nova história. Não nascemos
			endividados e nem mesmo investidores. Ganhamos e gastamos o dinheiro, ele é um meio importante, mas não podemos tê-lo como um fim. O verdadeiro fim são nossos sonhos e propósitos, assim como os de nossas famílias. É possível que esse desequilíbrio tenha sua procedência lá no passado. Ainda quando criança, talvez se lembre ou não, de seu primeiro contato com o dinheiro, quando gastou tudo com balas, sorvete e chocolates. 
      Não foi diferente quando se alfabetizou, mesmo sabendo fazer cálculos, continuou gastando.
			Assim foi na adolescência e na fase adulta. Outra fase foi quando recebeu seu primeiro salário, se lembra? Provavelmente gastou tudo. E assim o ciclo continuou, só que quando criança e jovem os bancos eram os pais/responsáveis, que não cobravam juros ao doar dinheiro para você, agora isso mudou. O ciclo do endividamento começa exatamente aí. 
			Não podemos criticar as formas de créditos. Sempre falo isso em meu canal de Youtube Dinheiro à Vista. Quando o crédito é utilizado de forma consciente, ou seja, a favor, pode ser um grande aliado. Contudo, mesmo estando inadimplente, é preciso entender que essa situação é plenamente favorável, independentemente de ter seu nome SUJO e negativado ou não. Relato isso em meu livro NOME SUJO PODE SER A SOLUÇÃO: quando se chega a essa situação é a certeza que novos caminhos virão pela frente. É um marco de um novo começo, para conquistar um novo fim! A orientação em seu caso é de muita calma e serenidade. Tudo é possível, não tenha dúvida. O caminho será se educar financeiramente e será preciso seguir um jeito de fazer, que vamos chamar de Metodologia DSOP de Educação Financeira, que é de minha autoria. Essa Metodologia me levou a minha independência financeira aos 37 anos de idade. Ela se encontra no meu long-seller  Terapia Financeira. Recomento que leia também o livro NOME SUJO PODE SER A SOLUÇÃO.
			Chegou a hora de assumir as rédeas de sua vida financeira e dar um basta nessa situação!
			Eu acredito em você! Entretanto, só faltava até minutos atrás você também acreditar. 
			Portanto mãos à obra! Reinaldo Domingos é PhD. em Educação Financeira, educador e terapeuta financeiro, presidente da DSOP Educação Financeira e da Associação Brasileira de Educadores Financeiros`,
      autor: 'Ph.D Reinaldo Domingos'
    })
    //console.log('Perfil Super endividado');
  }
  else if(pontuacao >= 16 && pontuacao <= 45){
    return ({
      perfil: 'Endividado',
      descricao: `Sua pontuação mostra que sua situação financeira pode ser endividado. Independentemente, é possível mudar de vez essa situação. 
			Ao longo de minha vida como educador e terapeuta financeiro já presenciei diversas situações parecidas com a sua, e acredite, todas elas conseguiram se reerguer muito rapidamente, aplicando a Metodologia DSOP de Educação Financeira, a qual eu sou o Mentor. Para tanto, é preciso acreditar no seu “Eu”, no seu “Ser”, e saber que, com muita perseverança, poderá mudar essa condição de endividado para até mesmo se tornar um investidor. É possível que ao
			longo de sua vida os seus hábitos financeiros sempre colocaram os gastos em primeiro lugar, ou seja, o dinheiro que passou pelas suas mãos teve seu destino priorizando o consumo, mas não se culpe, isso aconteceu também com nossos antepassados, que em nenhum momento aprenderam Educação Financeira. Também algo que ficou marcado nessa minha trajetória é que estar nessa situação de endividamento, muitas vezes é melhor do que estar numa situação de equilíbrio financeiro. Acredito nisso porque o estado de endividamento já provoca uma necessidade de atitude, de não mais permanecer nessa situação. Então, nada de perder mais tempo do que já perdeu, a hora chegou! Vamos virar esse jogo, estou com você, e vamos imediatamente envolver sua família nisso, não queira resolver tudo sozinho, já que a família unida jamais será vencida. E me coloco também nessa nova família. Praticar os 4 passos da Metodologia DSOP (Diagnosticar, Sonhar, Orçar e Poupar) fará com que você se empodere, que você renasça para a vida e o que mais vai fazer com que você tenha êxito serão os resgates de seus sonhos e propósitos, entre estes, o de sair dessa situação de endividamento, mas lembre-se que esse não pode ser o único, pois todos de sua família, inclusive você, precisam sonhar.
			Esse será o combustível e o agente motivador dessa vitória.`,
      autor: 'Ph.D Reinaldo Domingos'
    })
    //console.log('Perfil ');
  }
  else if(pontuacao >= 46 && pontuacao <= 75){
    return ({
      perfil: 'Equilibrado',
      descricao: `Você certamente está achando que essa situação é favorável à sua vida financeira, porém afirmo que não é. Como Ph.D em Educação Financeira, entendo que essa situação é a mais grave de todas. Desculpe a franqueza! Vamos começar a entender melhor o porque estar equilibrado financeiramente é uma situação não muito agradável. Pense na resposta da seguinte pergunta: "Se a partir de hoje você não mais recebesse seu ganho mensal, por quanto tempo manteria seu atual padrão de vida?" Ela já o coloca com a falta de sustentabilidade financeira e com isso o faz ficar vulnerável aos intemperes da vida, o que denota uma ausência de educação financeira. Certamente você já ouviu essa frase: "Não importa o quanto você ganha, mas sim o quanto você gasta", por isso convido você e sua família a conhecerem, aprenderem e praticarem a Educação Financeira pela Metodologia DSOP, a qual sou mentor.`,
      autor: 'Ph.D Reinaldo Domingos'
    })
    //console.log('Perfil Equilibrado');
  }
  else{
    return ({
      perfil: 'Investidor',
      descricao: `Investir é potencializar o dinheiro poupado. 
			Isso significa que você está num bom caminho, porque poupar vai muito além de investir e aplicando a Metodologia
			DSOP de Educação Financeira, a qual sou mentor, você conseguirá poupar com muito mais sustentabilidade
			financeira.Sua pontuação mostra que você tem um perfil investidor, ou seja, criou o hábito de poupar 
			parte do que ganha. Agora é preciso saber se você está carimbando esse dinheiro a ser investido, já
			que grande parte das pessoas não fazem isso e apenas guardam por guardar. E você, o que está fazendo
			com esse recurso? Esse dinheiro está devidamente separado por tempo e destino? Recomendo que faça uma
			avaliação dos sonhos a serem alcançados, distribuindo-os em curto (até 1 ano), médio (de 1 a 10 anos) 
			e longo (acima de 10 anos) prazo. Também é importante envolver a família nesse propósito, fazendo com
			que ela descubra seus verdadeiros sonhos, tanto individuais quanto coletivos.`,
      autor: 'Ph.D Reinaldo Domingos'
    })
    //console.log('Perfil Investidor');
  }
}

export const Playlist = () => {
  //É possivel utilizar reduce
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
  });
  const containerLista = React.useRef();
  const containerItem = React.useRef();
  const [pontos, setPontos] = React.useState({});
  const [resultado, setResultado] = React.useState([]);

  function handleChange(questao, alternativa, target){
    setRespostas({...respostas, [target.id]: [target.id, questao, alternativa]})
    setPontos({...pontos, [target.id]: alternativa.pontos})
  }

  function handleClick(e){
    e.preventDefault();

    if(respostas.p1 && respostas.p2 && respostas.p3){
      const pontuacao = Object.values(pontos).reduce((acc, atual) => acc+atual); 
      setResultado([{resultado: perfil(pontuacao)}]);
    }
    else{
      console.log('não exite, ativar Snackbar')
    }
  }

  function clickItem(e){
    //
    //console.log(e.parentElement.classList.add('ativo'))
    console.log(e.parentElement.classList.add('ativo'))
    //console.log(e.classList.contains('ativo'))

    //console.log(container.current.classList.add('ativo'))
  }

  return(
    <form style={{color: '#fff', display: 'flex', flexDirection: 'column', gap: '50px', maxWidth: '900px', margin: '0 auto'}}>
      {questoes.map((q) => (
        <Radio 
          key={q.id}
          refContainer={containerLista}
          refItem={containerItem}
          valor={respostas[q.id][2]?.texto}
          onchange={handleChange}
          clickItem={clickItem}
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
  return(
    <div ref={refContainer}>
      <h2 style={{marginBottom: '20px'}}>{questao}</h2>
      {alternativas?.map((alternativa) => (
        <label key={alternativa.texto} ref={refItem} onClick={({target}) => clickItem(target)}
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