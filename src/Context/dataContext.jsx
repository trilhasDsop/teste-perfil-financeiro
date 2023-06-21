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
    'questao': 'Como você planeja a sua aposentadoria?',
    'alternativas': [
      {
        'id': 'p5A',
        'letra': 'A',
        'texto': 'Tenho planos alternativos de previdência privada para garantir a minha segurança financeira.',
        'pontos': 10 
      },
      {
        'id': 'p5B',
        'letra': 'B',
        'texto': 'Não contribuo para a previdência social e nem para a privada.',
        'pontos': 0 
      },
      {
        'id': 'p5C',
        'letra': 'C',
        'texto': 'Contribuo para a previdência social. Sei que preciso de reserva extra, mas não consigo poupar.',
        'pontos': 5 
      }
    ]
  },
  {
    'id': 'p6',
    'questao': 'O que você entende sobre ser Independente Financeiramente?',
    'alternativas': [
      {
        'id': 'p6A',
        'letra': 'A',
        'texto': 'Que posso trabalhar por prazer e não por necessidade.',
        'pontos': 10 
      },
      {
        'id': 'p6B',
        'letra': 'B',
        'texto': 'Que posso curtir a vida intensamente e não pensar no futuro.',
        'pontos': 0 
      },
      {
        'id': 'p6C',
        'letra': 'C',
        'texto': 'Que posso ter dinheiro para viver bem o dia a dia.',
        'pontos': 5 
      }
    ]
  },
  {
    'id': 'p7',
    'questao': 'Você sabe quais são seus sonhos e objetivos de curto, médio e longo prazos?',
    'alternativas': [
      {
        'id': 'p7A',
        'letra': 'A',
        'texto': 'Sei quais são, quanto custam e por quanto tempo terei que guardar para realizá-los.',
        'pontos': 10 
      },
      {
        'id': 'p7B',
        'letra': 'B',
        'texto': 'Tenho muitos sonhos e sei quanto custam, mas não sei como realizá-los.',
        'pontos': 5 
      },
      {
        'id': 'p7C',
        'letra': 'C',
        'texto': 'Não tenho sonhos ou, se tenho, sempre acabo deixando-os para o futuro, porque não consigo guardar dinheiro para eles.',
        'pontos': 0
      }
    ]
  },
  {
    'id': 'p8',
    'questao': 'Se um imprevisto alterasse a sua situação financeira, qual seria a sua reação?',
    'alternativas': [
      {
        'id': 'p8A',
        'letra': 'A',
        'texto': 'Não saberia por onde começar e teria medo de encarar a minha verdadeira situação financeira.',
        'pontos': 0
      },
      {
        'id': 'p8B',
        'letra': 'B',
        'texto': 'Cortaria despesas e gastos desnecessários.',
        'pontos': 5 
      },
      {
        'id': 'p8C',
        'letra': 'C',
        'texto': 'Faria um bom diagnóstico financeiro, registrando o que ganho e o que gasto, além dos meus investimentos e dívidas, se os tiverem.',
        'pontos': 10 
      }
    ]
  },
  {
    'id': 'p9',
    'questao': 'Se a partir de hoje você não recebesse mais seu ganho, por quanto tempo você conseguiria manter seu atual padrão de vida?',
    'alternativas': [
      {
        'id': 'p9A',
        'letra': 'A',
        'texto': 'Não conseguiria me manter nem por alguns meses.',
        'pontos': 0
      },
      {
        'id': 'p9B',
        'letra': 'B',
        'texto': 'Manteria meu padrão de vida por 1, no máximo, 4 anos.',
        'pontos': 5 
      },
      {
        'id': 'p9C',
        'letra': 'C',
        'texto': 'Conseguiria fazer tudo que faço por 5, 10 ou mais anos.',
        'pontos': 10 
      }
    ]
  },
  {
    'id': 'p10',
    'questao': 'Quando você decide comprar um produto, qual é a sua atitude?',
    'alternativas': [
      {
        'id': 'p10A',
        'letra': 'A',
        'texto': 'Planejo uma forma de investimento para comprar à vista e com desconto.',
        'pontos': 10 
      },
      {
        'id': 'p10B',
        'letra': 'B',
        'texto': 'Parcelo dentro do meu orçamento.',
        'pontos': 5 
      },
      {
        'id': 'p10C',
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
      descricao: [
        'Quando passamos a pegar crédito nos bancos, acabamos caindo no ciclo do endividamento ao nos depararmos com os juros e nossa falta de educação financeira.',
        'Não podemos criticar as formas de crédito, pois quando bem utilizadas, se tornam grandes aliadas.',
        'A orientação é, antes de mais nada, manter a calma. Lembre-se: estando inadimplente, com nome sujo, negativado ou não, o caminho é sempre para a frente. Seguir uma metodologia de educação financeira, como a DSOP, que te eduque como seguir nessa situação, é o ideal. Acredite que você pode assumir as rédeas da sua vida financeira!',
        'Para te ajudar na sua caminhada, te indicamos a playlist abaixo:',
        ''
      ],
      links: [
        'Terapia Financeira;',
        'Nome sujo pode ser a solução'
      ],
    })
  }
  else if(pontuacao >= 16 && pontuacao <= 45){
    return ({
      perfil: 'Endividado',
      descricao: `Sua pontuação mostra que sua situação financeira pode ser endividado. Independentemente, é possível mudar de vez essa situação. 
			Ao longo de minha vida como educador e terapeuta financeiro já presenciei diversas situações parecidas com a sua, e acredite, todas elas conseguiram se reerguer muito rapidamente, aplicando a Metodologia DSOP de Educação Financeira, a qual eu sou o Mentor. Para tanto, é preciso acreditar no seu “Eu”, no seu “Ser”, e saber que, com muita perseverança, poderá mudar essa condição de endividado para até mesmo se tornar um investidor. É possível que ao
			longo de sua vida os seus hábitos financeiros sempre colocaram os gastos em primeiro lugar, ou seja, o dinheiro que passou pelas suas mãos teve seu destino priorizando o consumo, mas não se culpe, isso aconteceu também com nossos antepassados, que em nenhum momento aprenderam Educação Financeira. Também algo que ficou marcado nessa minha trajetória é que estar nessa situação de endividamento, muitas vezes é melhor do que estar numa situação de equilíbrio financeiro. Acredito nisso porque o estado de endividamento já provoca uma necessidade de atitude, de não mais permanecer nessa situação. Então, nada de perder mais tempo do que já perdeu, a hora chegou! Vamos virar esse jogo, estou com você, e vamos imediatamente envolver sua família nisso, não queira resolver tudo sozinho, já que a família unida jamais será vencida. E me coloco também nessa nova família. Praticar os 4 passos da Metodologia DSOP (Diagnosticar, Sonhar, Orçar e Poupar) fará com que você se empodere, que você renasça para a vida e o que mais vai fazer com que você tenha êxito serão os resgates de seus sonhos e propósitos, entre estes, o de sair dessa situação de endividamento, mas lembre-se que esse não pode ser o único, pois todos de sua família, inclusive você, precisam sonhar.
			Esse será o combustível e o agente motivador dessa vitória.`,
    })
  }
  else if(pontuacao >= 46 && pontuacao <= 75){
    return ({
      perfil: 'Equilibrado',
      descricao: `Você certamente está achando que essa situação é favorável à sua vida financeira, porém afirmo que não é. Como Ph.D em Educação Financeira, entendo que essa situação é a mais grave de todas. Desculpe a franqueza! Vamos começar a entender melhor o porque estar equilibrado financeiramente é uma situação não muito agradável. Pense na resposta da seguinte pergunta: "Se a partir de hoje você não mais recebesse seu ganho mensal, por quanto tempo manteria seu atual padrão de vida?" Ela já o coloca com a falta de sustentabilidade financeira e com isso o faz ficar vulnerável aos intemperes da vida, o que denota uma ausência de educação financeira. Certamente você já ouviu essa frase: "Não importa o quanto você ganha, mas sim o quanto você gasta", por isso convido você e sua família a conhecerem, aprenderem e praticarem a Educação Financeira pela Metodologia DSOP, a qual sou mentor.`,
    })
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
    })
  }
}

const playlistPerfil = [
  {
    perfil: 'Superendividado',
    playlists: [
      {
        id: 's1',
        nome: 'Eu mereço ter dinheiro',
        url_foto: '/src/assets/capas/Superendividado/Eu mereço ter dinheiro.png',
        link_url: 'https://streaming.dflix.com.br/course/ec439d93-6d2c-45cc-99bd-9911661e4e8d'
      },
      {
        id: 's2',
        nome: 'Dinheiro na crise',
        url_foto: '/src/assets/capas/Superendividado/Dinheiro na crise.png',
        link_url: 'https://streaming.dflix.com.br/course/80eb662b-cd18-4d41-acdf-680aad7643a7'
      },
      {
        id: 's3',
        nome: 'Ter dinheiro não tem segredo',
        url_foto: '/src/assets/capas/Superendividado/Ter dinheiro não tem segredo.png',
        link_url: 'https://streaming.dflix.com.br/course/590ebff2-1733-4206-8dfb-b0f02fff7388'
      },
      {
        id: 's4',
        nome: 'Formas de usar o crédito',
        url_foto: '/src/assets/capas/Superendividado/Formas de usar o crédito.png',
        link_url: 'https://streaming.dflix.com.br/course/27902b87-8763-4342-a5bf-f294b3ed5ffa'
      },
      {
        id: 's5',
        nome: 'Nome sujo pode ser a solução',
        url_foto: '/src/assets/capas/Superendividado/Nome sujo pode ser a solução.png',
        link_url: 'https://streaming.dflix.com.br/course/07d989b7-1a4d-4b16-a099-e51d56d97fd4'
      },
      {
        id: 's6',
        nome: 'Defenda seu dinheiro',
        url_foto: '/src/assets/capas/Superendividado/Defenda seu dinheiro.png',
        link_url: 'https://streaming.dflix.com.br/course/95d720ab-c24e-4688-9ac8-33ceb784e6e1'
      },
      {
        id: 's7',
        nome: 'Pague suas dívidas de forma definitiva',
        url_foto: '/src/assets/capas/Superendividado/Pague suas dívidas de forma definitiva.png',
        link_url: 'https://streaming.dflix.com.br/course/75833705-fe1b-4698-ba54-f66b97e00c25'
      },
    ]
  },
  {
    perfil: 'Endividado',
    playlists: [
      {
        id: 'En1',
        nome: 'Casa Sustentável',
        url_foto: '/src/assets/capas/Endividado/Casa Sustentável.png',
        link_url: 'https://streaming.dflix.com.br/course/e265f35a-ac1d-425d-a734-791494f44c01'
      },
      {
        id: 'En2',
        nome: 'Entenda e se livre das dívidas',
        url_foto: '/src/assets/capas/Endividado/Entenda e se livre das dívidas.png',
        link_url: 'https://streaming.dflix.com.br/course/670f2d8c-1b60-4707-9b22-e2617de9633a'
      },
      {
        id: 'En3',
        nome: 'Formas de usar o crédito',
        url_foto: '/src/assets/capas/Endividado/Formas de usar o crédito.png',
        link_url: 'https://streaming.dflix.com.br/course/27902b87-8763-4342-a5bf-f294b3ed5ffa'
      },
      {
        id: 'En4',
        nome: 'Nome sujo pode ser a solução',
        url_foto: '/src/assets/capas/Endividado/Nome sujo pode ser a solução.png',
        link_url: 'https://streaming.dflix.com.br/course/07d989b7-1a4d-4b16-a099-e51d56d97fd4'
      },
      {
        id: 'En5',
        nome: 'Pague suas dívidas de forma definitiva',
        url_foto: '/src/assets/capas/Endividado/Pague suas dívidas de forma definitiva.png',
        link_url: 'https://streaming.dflix.com.br/course/75833705-fe1b-4698-ba54-f66b97e00c25'
      },
      {
        id: 'En6',
        nome: 'Defenda seu dinheiro',
        url_foto: '/src/assets/capas/Endividado/Defenda seu dinheiro.png',
        link_url: 'https://streaming.dflix.com.br/course/95d720ab-c24e-4688-9ac8-33ceb784e6e1'
      },
      {
        id: 'En7',
        nome: 'Dinheiro na crise',
        url_foto: '/src/assets/capas/Endividado/Dinheiro na crise.png',
        link_url: 'https://streaming.dflix.com.br/course/80eb662b-cd18-4d41-acdf-680aad7643a7'
      }
    ]
  },
  {
    perfil: 'Equilibrado',
    playlists: [
      {
        id: 'Eq1',
        nome: 'Como administrar seu dinheiro',
        url_foto: '/src/assets/capas/Equilibrado/Como administrar seu dinheiro.png',
        link_url: 'https://streaming.dflix.com.br/course/36002ef9-e1ba-4ed1-8583-7c3b0908878b'
      },
      {
        id: 'Eq2',
        nome: 'Perfis Financeiros',
        url_foto: '/src/assets/capas/Equilibrado/Perfis Financeiros.png',
        link_url: 'https://streaming.dflix.com.br/course/437aa3ba-f356-4c79-a6cf-682e3d030881'
      },
      {
        id: 'Eq3',
        nome: 'Viva educado financeiramente',
        url_foto: '/src/assets/capas/Equilibrado/Viva educado financeiramente.png',
        link_url: 'https://streaming.dflix.com.br/course/ab19d92e-5d67-4e60-aaec-d6c67a19abf7'
      },
      {
        id: 'Eq4',
        nome: 'Comportamento Do Ser Rico',
        url_foto: '/src/assets/capas/Equilibrado/Comportamento Do Ser Rico.png',
        link_url: 'https://streaming.dflix.com.br/course/755da263-f1a8-446f-a08d-bca1bc3d80db'
      },
      {
        id: 'Eq5',
        nome: 'Sem reservas',
        url_foto: '/src/assets/capas/Equilibrado/Sem reservas.png',
        link_url: 'https://streaming.dflix.com.br/course/15de129d-e25e-447a-8cbd-3c56b6663d69'
      },
      {
        id: 'Eq6',
        nome: 'Nome sujo pode ser a solução',
        url_foto: '/src/assets/capas/Equilibrado/Nome sujo pode ser a solução.png',
        link_url: 'https://streaming.dflix.com.br/course/07d989b7-1a4d-4b16-a099-e51d56d97fd4'
      },
      {
        id: 'Eq7',
        nome: 'Dinheiro Na Crise',
        url_foto: '/src/assets/capas/Equilibrado/Dinheiro Na Crise.png',
        link_url: 'https://streaming.dflix.com.br/course/80eb662b-cd18-4d41-acdf-680aad7643a7'
      }
    ]
  },
  {
    perfil: 'Investidor',
    playlists: [
      {
        id: 'I1',
        nome: 'Construa seu Legado',
        url_foto: '/src/assets/capas/Investidor/Construa seu Legado.png',
        link_url: 'https://streaming.dflix.com.br/course/0c7e6848-3822-4584-bb0b-46b74d20b7cd'
      },
      {
        id: 'I2',
        nome: 'Descomplicando o bolso',
        url_foto: '/src/assets/capas/Investidor/Descomplicando o bolso.png',
        link_url: 'https://streaming.dflix.com.br/course/388ccd5f-9a30-4a36-90ff-207b516a2977'
      },
      {
        id: 'I3',
        nome: 'Trabalhadores não precisam ser pobres',
        url_foto: '/src/assets/capas/Investidor/Trabalhadores não precisam ser pobres.png',
        link_url: 'https://streaming.dflix.com.br/course/373f8719-8278-4c4d-8b77-151f4f4e9364'
      },
      {
        id: 'I4',
        nome: 'Comportamento do ser rico',
        url_foto: '/src/assets/capas/Investidor/Comportamento do ser rico.png',
        link_url: 'https://streaming.dflix.com.br/course/755da263-f1a8-446f-a08d-bca1bc3d80db'
      },
      {
        id: 'I5',
        nome: 'Empreender Vitorioso 1',
        url_foto: '/src/assets/capas/Investidor/Empreender Vitorioso.png',
        link_url: 'https://streaming.dflix.com.br/course/8cc53f01-3366-4123-b79e-a6853b676e58'
      },
      {
        id: 'I6',
        nome: 'Empreender Vitorioso 2',
        url_foto: '/src/assets/capas/Investidor/Empreender Vitoroso.png',
        link_url: 'https://streaming.dflix.com.br/course/b32aaf3f-7cf5-4eaf-bfd1-34fc753bf69c'
      },
      {
        id: 'I7',
        nome: 'Investimento Consciente',
        url_foto: '/src/assets/capas/Investidor/Investimento Consciente.png',
        link_url: 'https://streaming.dflix.com.br/course/fe138c16-6225-4871-8300-2e8a2dbad961'
      }
    ]
  }
]

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
    p9: '',
    p10: ''
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