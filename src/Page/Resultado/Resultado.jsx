import React from 'react';
import styleResultado from '../../styles/page/resultado.module.scss';

import Titulo from '../../Components/Titulo/Titulo';
import { DataContext } from '../../Context/dataContext';
import Wizard from '../../Components/Wizard/Wizard';

const Resultado = () => {
  const {
    respostas, 
    resultadoPerfil,
    filterPlaylist
  } = React.useContext(DataContext);
  const questoes = Object.values(respostas);
  const playList = filterPlaylist(resultadoPerfil);

  React.useEffect(() => {
    window.scrollTo(170, 0);
  }, []);

  return (
    <>
      <section className={styleResultado.sectionResultado__container}>
        <article className={styleResultado.sectionResultado__articlePerfil}>
          <div className={styleResultado.sectionResultado__articlePerfil__divflex}>
            <h1><span>Perfil</span><br/>{resultadoPerfil.perfil}</h1>
            <div className={styleResultado.sectionResultado__divflex}>
              <p>{resultadoPerfil.descricao}</p>
            </div>
          </div>
        </article>

        <article className={styleResultado.sectionResultado__article3Container}>
          <Titulo>A DFLIX recomenda a Playlist: {resultadoPerfil.perfil}</Titulo>

          <div className={styleResultado.sectionResultado__gridlista}>
            {playList[0]?.map((list) => (
              <a 
                key={list.id} href={list.link_url} target='_blank' title={list.nome}
                className={styleResultado.sectionResultado__gridlista__container} 
              >
                <img src={list.url_foto} alt={list.nome} width={400} height={512} />
                <p>{list.nome}</p>
              </a>
            ))}
          </div>
        </article>     

        <article className={styleResultado.sectionResultado__article2Container}>
          <Titulo>Nossos Planos</Titulo>

          <div className={styleResultado.sectionResultado__divPlanos}>
            <article className={styleResultado.sectionResultado__divPlanos__item}>
              <h2>Plano Semestral</h2>
              <p>R$<strong>53,40</strong></p>
              <p>R$<strong>8,90</strong>/MÊS*</p>
              <p>Pagamento realizado de uma só vez<br/> Sua assinatura será renovada automaticamente.</p>
              <a href="https://streaming.dflix.com.br/?modal=subscribe">Obter Plano</a>
            </article>

            <article className={styleResultado.sectionResultado__divPlanos__item}>
              <h2>Plano triMEStral</h2>
              <p>R$<strong>29,70</strong></p>
              <p>R$<strong>9,90</strong>/MÊS*</p>
              <p>Pagamento realizado de uma só vez<br/> Sua assinatura será renovada automaticamente.</p>
              <a href="https://streaming.dflix.com.br/?modal=subscribe">Obter Plano</a>
            </article>

            <article className={styleResultado.sectionResultado__divPlanos__item}>
              <h2>Plano Anual</h2>
              <p>R$<strong>94,80</strong></p>
              <p>R$<strong>7,90</strong>/MÊS*</p>
              <p>Pagamento realizado de uma só vez<br/> Sua assinatura será renovada automaticamente.</p>
              <a href="https://streaming.dflix.com.br/?modal=subscribe">Obter Plano</a>
            </article>
          </div>
        </article>
      </section>

      <Wizard />
    </>
  )
}

export default Resultado