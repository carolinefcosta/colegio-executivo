import React from "react";
import style from '../components/css/Propostas.module.css'

export default function Propostas() {
  return (
    <div>
      <h1 className={style.h1}>Proposta para o Ensino Fundamental 1</h1>
      <p className={style.text}>A primeira etapa do Ensino Fundamental, que abrange do 1º ao 5º anos, atende uma faixa etária aproximada de crianças de 6 a 10 anos de idade.  É uma fase na qual a turma tem uma única professora (normalmente graduada em Pedagogia) que ministra todas as disciplinas. Adicionalmente,  as disciplinas de inglês, música e educação física estão sob a responsabilidade de um professor da área. Já no 4º ano e no 5º ano uma professora ministra as aulas de Português, História e Geografia, outra professora ministra Matemática, Ciências e Artes, e as demais são desenvolvidas interdisciplinarmente pela professora regente da sala de aula.<br></br>Desde o 1º ano, os alunos já têm aula de Robótica, o Inglês passa a ser idioma praticado (1º ano = 3 vezes na semana e diário a partir do 2º ano) e frequentam também o Laboratório de Ciências. Quando a atividade de ensino está sendo regida por outro profissional, a professora titular faz parte de todas essas ações pedagógicas e dá suporte na questão disciplinar (se necessário).</p>
      
      <h1 className={style.h1}>Proposta para o Ensino Fundamental 2</h1>
      <p className={style.text}>Um período muito importante da vida escolar são os anos finais do Ensino Fundamental.  Nesses quatro anos, os alunos passam pela puberdade e início da adolescência, período de muitas mudanças físicas, psicológicas, emocionais e cognitivas.<br></br>De um grupo menor com no máximo três professores, eles passam a conviver com nove profissionais de quatro áreas de conhecimento.  As questões relativas aos conteúdos são mais exigidas e a autonomia muito mais cobrada.<br></br>As famílias mudam também e não são raros os momentos de dúvidas e conflitos.<br></br>Considerando esses aspectos, os professores do Colégio Executivo são estimulados a desenvolver aulas que despertem o interesse e a atenção dos alunos, aulas de Ciências usando laboratório uma vez por semana, utilização de músicas, Inglês diariamente com muita motivação para a conversação, oferta do Espanhol para familiarização com a língua.</p>
    </div>
  )
}