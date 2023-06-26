import React from 'react';
import stylePlaylist from '../../styles/page/playlist.module.scss';
import { Titulo } from '../../Components/Titulo/Titulo';
import { DataContext } from '../../Context/dataContext';
import { Footer } from '../../Layout/Footer/Footer';
import Wizard from '../../Components/Wizard/Wizard';

export const Playlist = () => {
  const { resultadoPerfil, filterPlaylist} = React.useContext(DataContext);
  const playList = filterPlaylist(resultadoPerfil);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <>
      <section className={stylePlaylist.playList__container}>
        <article className={stylePlaylist.playList__articlelist}>
          <Titulo>Sua Playlist: {resultadoPerfil.perfil}</Titulo>

          <div className={stylePlaylist.articlelist__gridlista}>
            {playList[0]?.map((list) => (
              <a 
                key={list.id} href={list.link_url} target='_blank' title={list.nome}
                className={stylePlaylist.articlelist__gridlista__container} 
              >
                <img src={list.url_foto} alt={list.nome} />
                <p>{list.nome}</p>
              </a>
            ))}
          </div>
        </article>
      </section>

      <section className={stylePlaylist.playList__container}>
        <article className={stylePlaylist.playList__section2__article}>
          <Titulo>Outros materiais que podem te ajudar</Titulo>
        
          <div className={stylePlaylist.playList__section2__divflex}>
            <p>Livro: 
              <a href="https://www.lojadsop.com.br/educacao-financeira/terapia-financeira-2-ed" target='_blank'>Terapia Financeira;</a>
              <a href="https://www.lojadsop.com.br/phd-reinaldo-domingos/nome-sujo-pode-ser-a-solucao-dsop" target='_blank'>Nome sujo pode ser a solução.</a>
            </p>
            <p>
              YouTube: <a href="https://www.youtube.com/@Dinheiroavista" target='_blank'>Dinheiro À Vista</a>
            </p>
          </div>
        </article>
      </section>

      <Wizard />
      
      <Footer />
    </>
  )
}