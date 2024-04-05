import React from 'react';
import playlistPerfil from '../utils/playlist';
import questoes from '../utils/questoes';

export const DataContext = React.createContext();

function perfil(pontuacao){
  if(pontuacao >= 0 && pontuacao <= 15){
    return ({
      perfil: 'Superendividado',
      descricao: `O uso do crédito bancário pode levar ao endividamento devido aos juros e à falta de educação financeira. No entanto, é importante reconhecer que o crédito pode ser útil se usado corretamente. Para lidar com essa situação, é essencial manter a calma e seguir uma metodologia de educação financeira, como a DSOP, que oferece orientações sobre como avançar mesmo em casos de inadimplência ou restrições de crédito. É possível assumir o controle da vida financeira e superar esses desafios.`,
    })
  }
  else if(pontuacao >= 16 && pontuacao <= 38){
    return ({
      perfil: 'Endividado',
      descricao: `Estar endividado não é o fim do mundo. É preciso ter atitude e buscar mudanças positivas. Envolver a família nessa jornada é importante, pois uma família unida é mais forte. A Metodologia DSOP, que inclui diagnosticar, sonhar, orçar e poupar, é uma maneira de fortalecer o controle financeiro. A educação financeira começa com os sonhos de todos os envolvidos, incluindo o objetivo de sair do endividamento.`,
    })
  }
  else if(pontuacao >= 39 && pontuacao <= 61){
    return ({
      perfil: 'Equilibrado',
      descricao: `Estar equilibrado financeiramente pode parecer bom, mas pode ser uma armadilha. Sem sua renda mensal, por quanto tempo você manteria seu padrão de vida atual? Se for poucos meses, indica falta de sustentabilidade financeira. O importante não é o quanto ganhamos, mas o quanto gastamos.`,
    })
  }
  else{
    return ({
      perfil: 'Investidor',
      descricao: `Você já tem o hábito de poupar parte de sua renda, o que é um bom sinal. No entanto, é importante avaliar se você está direcionando esses valores para objetivos e sonhos específicos, com prazo de conclusão. É recomendável separa-los em sonhos de curto (ate 1 ano), médio entre 1 e 10 anos) e longo prazo (mais de 10 anos).`,
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