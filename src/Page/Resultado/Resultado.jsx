import React from 'react';
import styleResultado from '../../styles/page/resultado.module.scss';
import urlImgEmail from '../../assets/img/img-email.png';

import Titulo from '../../Components/Titulo/Titulo';
import { DataContext } from '../../Context/dataContext';
import { useNavigate } from 'react-router-dom';
import Wizard from '../../Components/Wizard/Wizard';

const Resultado = () => {
  const navigator = useNavigate();
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
          <h1><span>Perfil</span><br/>{resultadoPerfil.perfil}</h1>
          
          {/*<div className={styleResultado.sectionResultado__articlePerfil__divflex}>
            
            <div className={styleResultado.sectionResultado__divflex}>
              <p>{resultadoPerfil.descricao}</p>
            </div>
          </div>*/}
        </article>

        <article className={styleResultado.sectionResultado__article3Container}>
          <Titulo>A DFLIX recomenda a Playlist: {resultadoPerfil.perfil}</Titulo>

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

        <article className={styleResultado.sectionResultado__article4Container}>
          <h1>
            Descubra como ser sustentável
            financeiramente. <a target='_blank' href="https://streaming.dflix.com.br/?modal=subscribe&_gl=1*1muvw9h*_ga*ODcyNDk1MDMxLjE2NzY1Nzc5MzI.*_ga_VJ0H2RSKL2*MTY4NTAxOTY3My4yMi4wLjE2ODUwMTk2NzUuMC4wLjA.*_ga_P9R4XZNDW6*MTY4NTAxOTY3My4yMS4wLjE2ODUwMTk2NzUuMC4wLjA.*_ga_QR82928XQM*MTY4NTAxOTY3My4xLjAuMTY4NTAxOTY3NS4wLjAuMA..*_ga_1FLVRWFQC1*MTY4NTAxOTY3Ni4yLjAuMTY4NTAxOTY3Ni4wLjAuMA..&_ga=2.242868930.1907897884.1684955768-872495031.1676577932">Assine a DFlix</a>
          </h1>
        </article>   

        {/*<article className={styleResultado.sectionResultado__article2Container}>
          <Titulo>Seus resultados</Titulo>
          
          {questoes?.map((questao, i) => (
            <article key={i} className={styleResultado.sectionResultado__article2resultado}>
              <h2>{questao[1]}</h2>
                <p className={styleResultado.sectionResultado__article2resultado__questao}>
                  <span>{questao[2]?.letra}</span> {questao[2]?.texto}
                </p>
            </article>
          ))}
          </article>*/}
      </section>

      <Wizard />
          
      <section className={styleResultado.sectionResultado__footer}>
        <div className={styleResultado.sectionResultado__footercontainer}>
          <div className={styleResultado.sectionResultado__divtexto}>
            <h1>Enviado!</h1>
            <p>Seu teste foi enviado<br/> com sucesso para o seu<br/> endereço de e-mail fornecido.</p>
          </div>

          <div className={styleResultado.sectionResultado__divimg}>
            <img 
              height={567} width={567} 
              src={urlImgEmail} 
              alt="imagem da carta de email" 
            />
          </div>
        </div>
      </section>    
    </>
  )
}

export default Resultado