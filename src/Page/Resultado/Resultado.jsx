import React from 'react';
import styleHome from '../../styles/page/home.module.scss';
import styleResultado from '../../styles/page/resultado.module.scss';

import img1 from '../../assets/capas/Equilibrado/Comportamento Do Ser Rico.png';
import img2 from '../../assets/capas/Equilibrado/Nome sujo pode ser a solução.png';
import img3 from '../../assets/capas/Equilibrado/Dinheiro Na Crise.png';

function perfil(pontuacao){
  if(pontuacao >= 0 && pontuacao <= 15){
    return ({
      perfil: 'Superendividado',
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
  }
  else if(pontuacao >= 46 && pontuacao <= 75){
    return ({
      perfil: 'Equilibrado',
      descricao: `Você certamente está achando que essa situação é favorável à sua vida financeira, porém afirmo que não é. Como Ph.D em Educação Financeira, entendo que essa situação é a mais grave de todas. Desculpe a franqueza! Vamos começar a entender melhor o porque estar equilibrado financeiramente é uma situação não muito agradável. Pense na resposta da seguinte pergunta: "Se a partir de hoje você não mais recebesse seu ganho mensal, por quanto tempo manteria seu atual padrão de vida?" Ela já o coloca com a falta de sustentabilidade financeira e com isso o faz ficar vulnerável aos intemperes da vida, o que denota uma ausência de educação financeira. Certamente você já ouviu essa frase: "Não importa o quanto você ganha, mas sim o quanto você gasta", por isso convido você e sua família a conhecerem, aprenderem e praticarem a Educação Financeira pela Metodologia DSOP, a qual sou mentor.`,
      autor: 'Ph.D Reinaldo Domingos'
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
      autor: 'Ph.D Reinaldo Domingos'
    })
  }
}

export const Resultado = () => {
  return (
    <>
      <section className={styleResultado.sectionResultado__container}>
        <article className={styleResultado.sectionResultado__articlePerfil}>
          <div className={styleResultado.sectionResultado__articlePerfil__divflex}>
            <h1><span>Perfil</span><br/>Equilibrado</h1>
            <p>
              A sua situação financeira de equilibrado financeiramente para endividado está há poucos passos de distância. É preciso atitudes imediatas de combater a causa dos problemas já apresentados neste teste. O envolvimento familiar, caso tenha família, é imprescindível. As mudanças de hábitos e comportamentos em relação ao dinheiro também é necessária. Busque pelos sonhos e propósitos, eles que serviram como agentes motivadores.<br/>
              <strong>Ph.D Reinaldo Domingos</strong>
            </p>
          </div>
        </article>

        <article className={styleResultado.sectionResultado__article2Container}>
          <h1>Seus resultados
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
            </ul>
            <p>
              Este é um dos requisitos imprescindível para uma pessoa destinar seus recursos ganhos e gastos, de forma estruturada para que possa buscar os propósitos, sonhos e necessidades
            </p>
          </article>

          <article className={styleHome.section1__home__article}>
            <h2>O seu seguro de vida é suficiente para garantir sua independência financeira e/ou invalidez?</h2>
            <ul className={styleHome.section1__home__articleQuestoes}>
              <li>
                <span>B</span> É suficiente, mas não sobra nada.
              </li>
            </ul>
            <p>
              Sua atitude mostra que você está no meio do caminho, ou seja, tem e/ou teve seguro, mas o mesmo não garante a sustentabilidade financeira em caso de um sinistro.
            </p>
          </article>

          <article className={styleHome.section1__home__article}>
            <h2>Você realiza seu orçamento financeiro?</h2>
            <ul className={styleHome.section1__home__articleQuestoes}>
              <li>
                <span>B</span> Somente registro o realizado mas não faço qualquer análise.
              </li>
            </ul>
            <p>
              Anotar somente sem analisar, não remeterá a atitudes necessárias para tomada de decisões em relação a movimentação financeira, preventivas e/ou corretivas.
            </p>
          </article>
        </article>

        <article className={styleResultado.sectionResultado__article3Container}>
          <h1>Seus resultados: Equilibrado
            <svg width="18" height="5" viewBox="0 0 18 5" fill="none" xmlns="http: www.w3.org/2000/svg">
                <path d="M1 1L9 3L17 1" stroke="#12FF00" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </h1>

          <div className={styleResultado.sectionResultado__gridlista}>
            <a href='#'className={styleResultado.sectionResultado__gridlista__container}>
              <img src={img1} alt="" />
              <p>Comportamento do ser rico</p>
            </a>

            <a href='#'className={styleResultado.sectionResultado__gridlista__container}>
              <img src={img2} alt="" />
              <p>Nome sujo pode ser a solução</p>
            </a>

            <a href='#'className={styleResultado.sectionResultado__gridlista__container}>
              <img src={img3} alt="" />
              <p>Dinheiro Na Crise</p>
            </a>
          </div>

          <div className={styleResultado.sectionResultado__divplaylist}>
            <a href="playlist">Ver mais</a>
          </div>
        </article>
      </section>

      <section className={styleResultado.section2Resultado}>
        <div className={styleResultado.section2Resultado__container}>
          <h1>
            Descubra como ser sustentável
            financeiramente. <a target='_blank' href="https://streaming.dflix.com.br/?modal=subscribe&_gl=1*1muvw9h*_ga*ODcyNDk1MDMxLjE2NzY1Nzc5MzI.*_ga_VJ0H2RSKL2*MTY4NTAxOTY3My4yMi4wLjE2ODUwMTk2NzUuMC4wLjA.*_ga_P9R4XZNDW6*MTY4NTAxOTY3My4yMS4wLjE2ODUwMTk2NzUuMC4wLjA.*_ga_QR82928XQM*MTY4NTAxOTY3My4xLjAuMTY4NTAxOTY3NS4wLjAuMA..*_ga_1FLVRWFQC1*MTY4NTAxOTY3Ni4yLjAuMTY4NTAxOTY3Ni4wLjAuMA..&_ga=2.242868930.1907897884.1684955768-872495031.1676577932">Assine a DFlix</a>
          </h1>
        </div>
      </section>
    </>
  )
}
