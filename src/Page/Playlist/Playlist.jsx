import React from 'react';
import stylePlaylist from '../../styles/page/playlist.module.scss';
import { Titulo } from '../../Components/Titulo/Titulo';
import { DataContext } from '../../Context/dataContext';
import { Footer } from '../../Layout/Footer/Footer';

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
                key={list.id} href='#' title={list.nome}
                className={stylePlaylist.articlelist__gridlista__container} 
              >
                <img src={list.url_foto} alt={list.nome} />
                <p>{list.nome}</p>
              </a>
            ))}
          </div>
        </article>
      </section>
      
      <Footer />
    </>
  )
}