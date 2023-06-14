import React from 'react';
import fotoLogo from './assets/img/Logo-DFLIX.svg';
import ilustracao from './assets/img/Ilustracao2.svg';
import styleHeader from '../src/styles/layout/header.module.scss';
import styleHome from '../src/styles/page/home.module.scss';

function App() {
  return (
    <>
      <header className={styleHeader.header__menu}>
        <nav className={styleHeader.header__menu__nav}>
          <a className={styleHeader.header__menu__logo} href='/'>
            <img src={fotoLogo} alt='logo dflix' />
          </a>

          <ul className={styleHeader.header__menu__lista}>
            <li><a href="https://streaming.dflix.com.br/">Entrar</a></li>
            <li><a href="https://streaming.dflix.com.br/?modal=subscribe&_gl=1*1muvw9h*_ga*ODcyNDk1MDMxLjE2NzY1Nzc5MzI.*_ga_VJ0H2RSKL2*MTY4NTAxOTY3My4yMi4wLjE2ODUwMTk2NzUuMC4wLjA.*_ga_P9R4XZNDW6*MTY4NTAxOTY3My4yMS4wLjE2ODUwMTk2NzUuMC4wLjA.*_ga_QR82928XQM*MTY4NTAxOTY3My4xLjAuMTY4NTAxOTY3NS4wLjAuMA..*_ga_1FLVRWFQC1*MTY4NTAxOTY3Ni4yLjAuMTY4NTAxOTY3Ni4wLjAuMA..&_ga=2.242868930.1907897884.1684955768-872495031.1676577932">Assine agora</a></li>
          </ul>
        </nav>
      </header>

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
            <svg width="18" height="5" viewBox="0 0 18 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L9 3L17 1" stroke="#12FF00" stroke-width="2" stroke-linecap="round"/>
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

          <div className={styleHome.section1__home__divbutton}>
            <a href="#">Resetar</a>
            <a href="#">Enviar</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
