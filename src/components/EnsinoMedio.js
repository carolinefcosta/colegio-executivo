import React from "react";
import Image from "next/image";
import ens_medio from '../images/niveis3.jpg';
import style from '../components/css/EnsinoMedio.module.css';

export default function EnsinoMedio() {
  return (
    <div>
        <div className={style.main}>
            <h1 className={style.h1}>Ensino Médio</h1>
            <p className={style.text_first}>A LDB, em seu Art. 35, trata sobre o Ensino Médio destacando ser a etapa final da Educação Básica, com duração mínima de três anos, cujas finalidades são:<br></br>
            I - a consolidação e o aprofundamento dos conhecimentos adquiridos no Ensino Fundamental, possibilitando o prosseguimento de estudos;<br></br>
            II - a preparação básica para o trabalho e a cidadania do educando, para continuar aprendendo, de modo a ser capaz de se adaptar com flexibilidade a novas condições de ocupação ou aperfeiçoamento posteriores;<br></br>
            III - o aprimoramento do educando como pessoa humana, incluindo a formação ética e o desenvolvimento da autonomia intelectual e do pensamento crítico;<br></br>
            IV - a compreensão dos fundamentos científico-tecnológicos dos processos produtivos, relacionando a teoria com a prática, no ensino de cada disciplina.</p>
          <div className={style.second_main}>
            <p className={style.text}>
            O desenvolvimento da proposta curricular do Colégio Executivo para o Ensino Médio tem foco nas finalidades acima elencadas, promovendo uma experiência de estudos ao educando compatível com a sua etapa de desenvolvimento e aproximando-o de novos contextos e responsabilidades, assim sendo: </p>
            <ul>
              <li>📍 O horário de aulas ofertado é estendido, tendo aulas no contraturno de: Redação, Matemática, Física e Química;</li>
              <li>📍 É disponibilizada um programa de monitoria para suporte aos estudantes, objetivando a superação de dificuldades, que possam surgir nos demais componentes curriculares;</li>
              <li>📍 Adicionalmente, são realizados aulões de revisão com professores da Instituição e com professores convidados, aos sábados;</li>
              <li>📍 Também é oferecida orientação profissional, através do serviço de Psicologia.</li>
            </ul>
          </div>
          <Image className={style.img} src={ens_medio} alt="nivel-3"/>
          <p className={style.paragrafh}>Grêmio Estudantil 2017</p>
        </div>
      </div>
  )
}