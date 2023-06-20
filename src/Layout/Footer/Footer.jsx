import React from 'react';
import styleFooter from '../../styles/components/footer.module.scss';

export const Footer = React.memo(function Footer(){
   return (
      <section className={styleFooter.sectionFooter}>
        <div className={styleFooter.sectionFooter__container}>
          <h1>
            Descubra como ser sustentável
            financeiramente. <a target='_blank' href="https://streaming.dflix.com.br/?modal=subscribe&_gl=1*1muvw9h*_ga*ODcyNDk1MDMxLjE2NzY1Nzc5MzI.*_ga_VJ0H2RSKL2*MTY4NTAxOTY3My4yMi4wLjE2ODUwMTk2NzUuMC4wLjA.*_ga_P9R4XZNDW6*MTY4NTAxOTY3My4yMS4wLjE2ODUwMTk2NzUuMC4wLjA.*_ga_QR82928XQM*MTY4NTAxOTY3My4xLjAuMTY4NTAxOTY3NS4wLjAuMA..*_ga_1FLVRWFQC1*MTY4NTAxOTY3Ni4yLjAuMTY4NTAxOTY3Ni4wLjAuMA..&_ga=2.242868930.1907897884.1684955768-872495031.1676577932">Assine a DFlix</a>
          </h1>
        </div>
      </section>
   )
})