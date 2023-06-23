import React from 'react';
import playlistPerfil from '../utils/playlist';
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
  {
    'id': 'p4',
    'questao': 'Você consegue fazer algum tipo de investimento?',
    'alternativas': [
      {
        'id': 'p4A',
        'letra': 'A',
        'texto': 'Quando sobra dinheiro, invisto, normalmente, na poupança.',
        'pontos': 5 
      },
      {
        'id': 'p4B',
        'letra': 'B',
        'texto': 'Utilizo mais de 10% do meu ganho em linhas de investimentos, que variam de acordo com os meus sonhos.',
        'pontos': 10 
      },
      {
        'id': 'p4C',
        'letra': 'C',
        'texto': 'Nunca sobra dinheiro para esse tipo de ação.',
        'pontos': 0
      }
    ]
  },
  {
    'id': 'p5',
    'questao': 'O que você entende sobre ser Independente Financeiramente?',
    'alternativas': [
      {
        'id': 'p5A',
        'letra': 'A',
        'texto': 'Que posso trabalhar por prazer e não por necessidade.',
        'pontos': 10 
      },
      {
        'id': 'p5B',
        'letra': 'B',
        'texto': 'Que posso curtir a vida intensamente e não pensar no futuro.',
        'pontos': 0 
      },
      {
        'id': 'p5C',
        'letra': 'C',
        'texto': 'Que posso ter dinheiro para viver bem o dia a dia.',
        'pontos': 5 
      }
    ]
  },
  {
    'id': 'p6',
    'questao': 'Se um imprevisto alterasse a sua situação financeira, qual seria a sua reação?',
    'alternativas': [
      {
        'id': 'p6A',
        'letra': 'A',
        'texto': 'Não saberia por onde começar e teria medo de encarar a minha verdadeira situação financeira.',
        'pontos': 0
      },
      {
        'id': 'p6B',
        'letra': 'B',
        'texto': 'Cortaria despesas e gastos desnecessários.',
        'pontos': 5 
      },
      {
        'id': 'p6C',
        'letra': 'C',
        'texto': 'Faria um bom diagnóstico financeiro, registrando o que ganho e o que gasto, além dos meus investimentos e dívidas, se os tiverem.',
        'pontos': 10 
      }
    ]
  },
  {
    'id': 'p7',
    'questao': 'Se a partir de hoje você não recebesse mais seu ganho, por quanto tempo você conseguiria manter seu atual padrão de vida?',
    'alternativas': [
      {
        'id': 'p7A',
        'letra': 'A',
        'texto': 'Não conseguiria me manter nem por alguns meses.',
        'pontos': 0
      },
      {
        'id': 'p7B',
        'letra': 'B',
        'texto': 'Manteria meu padrão de vida por 1, no máximo, 4 anos.',
        'pontos': 5 
      },
      {
        'id': 'p7C',
        'letra': 'C',
        'texto': 'Conseguiria fazer tudo que faço por 5, 10 ou mais anos.',
        'pontos': 10 
      }
    ]
  },
  {
    'id': 'p8',
    'questao': 'Quando você decide comprar um produto, qual é a sua atitude?',
    'alternativas': [
      {
        'id': 'p8A',
        'letra': 'A',
        'texto': 'Planejo uma forma de investimento para comprar à vista e com desconto.',
        'pontos': 10 
      },
      {
        'id': 'p8B',
        'letra': 'B',
        'texto': 'Parcelo dentro do meu orçamento.',
        'pontos': 5 
      },
      {
        'id': 'p8C',
        'letra': 'C',
        'texto': 'Compro e depois me preocupo como vou pagar.',
        'pontos': 0
      }
    ]
  },
];

function perfil(pontuacao){
  if(pontuacao >= 0 && pontuacao <= 15){
    return ({
      perfil: 'Superendividado',
      descricao: `O uso do crédito bancário pode levar ao endividamento devido aos juros e à falta de educação financeira. No entanto, é importante reconhecer que o crédito pode ser útil se usado corretamente. Para lidar com essa situação, é essencial manter a calma e seguir uma metodologia de educação financeira, como a DSOP, que oferece orientações sobre como avançar mesmo em casos de inadimplência ou restrições de crédito. É possível assumir o controle da vida financeira e superar esses desafios.`,
      links__livro: [
        {
          'titulo': 'Terapia Financeira;',
          'link': 'https://www.lojadsop.com.br/educacao-financeira/terapia-financeira-2-ed'  
        },
        {
          'titulo': 'Nome sujo pode ser a solução.',
          'link': 'https://www.lojadsop.com.br/phd-reinaldo-domingos/nome-sujo-pode-ser-a-solucao-dsop'
        }
      ],
      links__outro: [
        {
          'titulo': 'Dinheiro À Vista',
          'link': 'https://www.youtube.com/@Dinheiroavista' 
        }
      ]
    })
  }
  else if(pontuacao >= 16 && pontuacao <= 38){
    return ({
      perfil: 'Endividado',
      descricao: `Estar endividado não é o fim do mundo. É preciso ter atitude e buscar mudanças positivas. Envolver a família nessa jornada é importante, pois uma família unida é mais forte. A Metodologia DSOP, que inclui diagnosticar, sonhar, orçar e poupar, é uma maneira de fortalecer o controle financeiro. A educação financeira começa com os sonhos de todos os envolvidos, incluindo o objetivo de sair do endividamento.`,
      links__livro: [
        {
          'titulo': 'Terapia Financeira;',
          'link': 'https://www.lojadsop.com.br/educacao-financeira/terapia-financeira-2-ed'  
        },
        {
          'titulo': 'Nome sujo pode ser a solução.',
          'link': 'https://www.lojadsop.com.br/phd-reinaldo-domingos/nome-sujo-pode-ser-a-solucao-dsop'
        }
      ],
      links__outro: [
        {
          'titulo': 'Dinheiro À Vista',
          'link': 'https://www.youtube.com/@Dinheiroavista' 
        }
      ]
    })
  }
  else if(pontuacao >= 39 && pontuacao <= 61){
    return ({
      perfil: 'Equilibrado',
      descricao: `Estar equilibrado financeiramente pode parecer bom, mas pode ser uma armadilha. Sem sua renda mensal, por quanto tempo você manteria seu padrão de vida atual? Se for poucos meses, indica falta de sustentabilidade financeira. O importante não é o quanto ganhamos, mas o quanto gastamos.`,
      links__livro: [
        {
          'titulo': 'Terapia Financeira;',
          'link': 'https://www.lojadsop.com.br/educacao-financeira/terapia-financeira-2-ed'  
        },
        {
          'titulo': 'Nome sujo pode ser a solução.',
          'link': 'https://www.lojadsop.com.br/phd-reinaldo-domingos/nome-sujo-pode-ser-a-solucao-dsop'
        }
      ],
      links__outro: [
        {
          'titulo': 'Dinheiro À Vista',
          'link': 'https://www.youtube.com/@Dinheiroavista' 
        }
      ]
    })
  }
  else{
    return ({
      perfil: 'Investidor',
      descricao: `Você já tem o hábito de poupar parte de sua renda, o que é um bom sinal. No entanto, é importante avaliar se você está direcionando esses valores para objetivos e sonhos específicos, com prazo de conclusão. É recomendável separa-los em sonhos de curto (ate 1 ano), médio entre 1 e 10 anos) e longo prazo (mais de 10 anos).`,
      links__livro: [
        {
          'titulo': 'Terapia Financeira.',
          'link': 'https://www.lojadsop.com.br/educacao-financeira/terapia-financeira-2-ed'  
        }
      ],
      links__outro: [
        {
          'titulo': 'DSOP',
          'link': 'https://www.dsop.com.br/'
        }
      ]
    })
  }
}



const User = ({children}) => {
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
    p5: '',
    p6: '',
    p7: '',
    p8: '',
  });
  const [resultado, setResultado] = React.useState(null);
  const resultadoPerfil = perfil(resultado);

  const filterPlaylist = (resultadoP) => {
    return playlistPerfil
    .filter(({perfil}) => perfil === resultadoP.perfil)
    .map(({playlists}) => playlists)
  }

  return (
    <DataContext.Provider value={{
      questoes,
      resultado,
      setResultado,
      respostas,
      setRespostas,
      resultadoPerfil,
      filterPlaylist
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default User