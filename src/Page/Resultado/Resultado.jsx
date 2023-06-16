import React from 'react';
import styleHome from '../../styles/page/home.module.scss';
import styleResultado from '../../styles/page/resultado.module.scss';

import img1 from '../../assets/capas/Equilibrado/Comportamento Do Ser Rico.png';
import img2 from '../../assets/capas/Equilibrado/Nome sujo pode ser a solução.png';
import img3 from '../../assets/capas/Equilibrado/Dinheiro Na Crise.png';

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
