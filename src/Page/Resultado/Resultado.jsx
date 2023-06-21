import React from 'react';
import styleHome from '../../styles/page/home.module.scss';
import styleResultado from '../../styles/page/resultado.module.scss';

import { Titulo } from '../../Components/Titulo/Titulo';
import { DataContext } from '../../Context/dataContext';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../Layout/Footer/Footer';

export const Resultado = () => {
  const navigator = useNavigate();
  const {
    respostas, 
    resultadoPerfil,
    filterPlaylist
  } = React.useContext(DataContext);
  const questoes = Object.values(respostas);
  const playList = filterPlaylist(resultadoPerfil);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className={styleResultado.sectionResultado__container}>
        <article className={styleResultado.sectionResultado__articlePerfil}>
          <div className={styleResultado.sectionResultado__articlePerfil__divflex}>
            <h1><span>Perfil</span><br/>{resultadoPerfil.perfil}</h1>
            <p>
              {resultadoPerfil.descricao}<br/>
              <strong>{resultadoPerfil.autor}</strong>
            </p>
          </div>
        </article>

        <article className={styleResultado.sectionResultado__article2Container}>
          <Titulo>Seus resultados</Titulo>
          
          {questoes?.map((questao, i) => (
            <article key={i} className={styleResultado.sectionResultado__article2resultado}>
              <h2>{questao[1]}</h2>
                <p className={styleResultado.sectionResultado__article2resultado__questao}>
                  <span>{questao[2]?.letra}</span> {questao[2]?.texto}
                </p>
            </article>
          ))}
        </article>

        <article className={styleResultado.sectionResultado__article3Container}>
          <Titulo>Seus resultados: {resultadoPerfil.perfil}</Titulo>

          <div className={styleResultado.sectionResultado__gridlista}>
            {playList[0].filter((p, i) => i < 3).map((list) => (
              <a key={list.id} href={list.link_url} target='_blank' className={styleResultado.sectionResultado__gridlista__container} title={list.nome}>
                <img src={list.url_foto} alt={list.nome} />
                <p>{list.nome}</p>
              </a>
            ))}
          </div>

          <div className={styleResultado.sectionResultado__divplaylist}>
            <button onClick={() => navigator('/playlist')}>Ver mais</button>
          </div>
        </article>
      </section>
      
      <Footer />
    </>
  )
}