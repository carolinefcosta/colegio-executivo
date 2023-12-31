import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import style from '../components/css/Diferenciais.module.css'

export default function Diferenciais() {
  return (
    <div className={style.main}>
      <Header />
      <div className={style.div_main}>
        <h1 className={style.h1}>Serviços</h1>
        <h2 className={style.h2}>Educação Bilíngue</h2>
        <p className={style.text}>O mundo contemporâneo apresenta entre os seus muitos desafios o estabelecimento de uma comunidade mundial pautada no bem comum e na cooperação entre os povos. Para isso, as linguagens se fazem necessárias como pontes capazes de unir a todos no propósito de construção de uma sociedade mais justa, fraterna e solidária.</p>
        <p className={style.text}>Atento a este cenário, o Colégio Executivo se coloca como instituição bilíngue, ou seja, utilizando duas línguas no seu cotidiano a fim ampliar as habilidades comunicativas e culturais dos alunos para que estejam mais bem aparelhados com recursos linguísticos para exercerem a cidadania nesta aldeia global.</p>
        <hr className={style.hr}></hr>
      </div>
      <div className={style.div_main}>
        <h2 className={style.h2}>Tempo Integral</h2>
        <p className={style.text}> Pensado e planejado por profissionais das áreas da pedagogia, psicologia e psicopedagogia, a nossa proposta pedagógica e estratégias de ensino-aprendizagem oferecem o melhor do Ensino em Tempo Integral para os nossos alunos. Aqui priorizamos a multidimensionalidade de cada aluno, contemplando todos os aspectos do processo de ensino-aprendizagem, trabalhando com estratégias que garantem o desenvolvimento intelectual, social, emocional, físico e cultural.</p>
        <hr className={style.hr}></hr>
      </div>
      {/* <div className={style.div_main}>
        <h2 className={style.h2}>Música</h2>
      </div> */}
      <Footer />
    </div>
  )
}