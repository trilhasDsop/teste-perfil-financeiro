import React from 'react';
import fotoLogo from './assets/img/Logo-DFLIX.svg';
import ilustracao from './assets/img/Ilustracao2.svg'

function App() {
  return (
    <>
      <header>
        <nav>
          <a>
            <img src={fotoLogo} alt='logo dflix' />
          </a>

          <ul>
            <li><a href="https://streaming.dflix.com.br/">Entrar</a></li>
            <li><a href="https://streaming.dflix.com.br/?modal=subscribe&_gl=1*1muvw9h*_ga*ODcyNDk1MDMxLjE2NzY1Nzc5MzI.*_ga_VJ0H2RSKL2*MTY4NTAxOTY3My4yMi4wLjE2ODUwMTk2NzUuMC4wLjA.*_ga_P9R4XZNDW6*MTY4NTAxOTY3My4yMS4wLjE2ODUwMTk2NzUuMC4wLjA.*_ga_QR82928XQM*MTY4NTAxOTY3My4xLjAuMTY4NTAxOTY3NS4wLjAuMA..*_ga_1FLVRWFQC1*MTY4NTAxOTY3Ni4yLjAuMTY4NTAxOTY3Ni4wLjAuMA..&_ga=2.242868930.1907897884.1684955768-872495031.1676577932">Assine agora</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <div>
          <div>
            <h1>Teste de Perfil Financeiro</h1>
            <p>Vivamus tristique lorem ac dolor luctus faucibus. Curabitur magna orci, sodales ut lacus sed, pretium convallis augue. Nullam tincidunt a augue non rutrum. </p>
          </div>

          <div>
            <img src={ilustracao} alt="imagem ilustrativa de " />
          </div>
        </div>
      </main>

      <section>
        <div>
          <h1>Inicie seu questionário</h1>

          <article>
            <h2>O que você ganha por mês é suficiente para arcar com os seus gastos?</h2>
            <ul>
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

          <article>
            <h2>O seu seguro de vida é suficiente para garantir sua independência financeira e/ou invalidez?</h2>
            <ul>
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

          <article>
            <h2>Você realiza seu orçamento financeiro?</h2>
            <ul>
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

          <div>
            <a href="#">Resetar</a>
            <a href="#">Enviar</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
