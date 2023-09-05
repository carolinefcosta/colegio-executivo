import React from "react";
import Image from "next/image";
import ens_fund from '../images/niveis2.jpg';
import style from '../components/css/Niveis.module.css'
import Propostas from "./Propostas";

export default function EnsinoFundamental() {
  return (
    <div>
        <div className={style.main}>
          <div className={style.mainH1_nivel2}>
            <h1 className={style.h1}>Ensino Fundamental</h1>
            <p className={style.text}>O Ensino Fundamental  é entendido e constituído pelas experiências escolares que se desdobram em torno do conhecimento, permeadas pelas relações sociais, buscando articular as vivências e saberes dos alunos com os conhecimentos historicamente acumulados, contribuindo para construir a personalidade e a identidade dos estudantes.</p>
            <p className={style.text}>As experiências educacionais envolvem todos os aspectos do ambiente escolar: tanto aqueles que compõem a parte explícita do currículo, como os que contribuem de forma implícita para a aquisição de conhecimentos socialmente relevantes. Os valores, atitudes, sensibilidade e orientações de conduta são desenvolvidos pelos conhecimentos, por rotinas, eventos, normas de convivência social, festividades, pela distribuição do tempo e organização do espaço educativo, pelos materiais didáticos utilizados na aprendizagem e pelos momentos de recreação, ou seja, pelas vivências proporcionadas pela Escola.</p>
          </div>
          <Image className={style.img_nivel2} src={ens_fund} alt="nivel-2"/>
          <div className={style.div_paragraph}>
            <p className={style.paragraph_nivel2}>Alícia - 4º Ano<br></br>Destaque na XX Olimpíada<br></br>Brasileira de Astronomia</p>
          </div>
        </div>
        <Propostas/>
    </div>
  )
}