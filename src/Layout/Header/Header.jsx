import React from 'react';
import styleHeader from '../../styles/layout/header.module.scss';
import fotoLogo from '../../assets/img/Logo-DFLIX.svg';

export const Header = () => {
   return (
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
   )
}
