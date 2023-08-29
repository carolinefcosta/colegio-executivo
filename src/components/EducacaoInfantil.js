import React from "react";
import Image from "next/image";
import ed_infantil from '../images/niveis1.jpg';
import style from '../components/css/Niveis.module.css'

export default function EducacaoInfantil() {
  return (
    <div>
        <h1 className={style.title}>Conheça nossos Níveis de Ensino</h1>
        <div className={style.main}>
          <div className={style.mainH1_nivel1}>
            <h1 className={style.h1}>Educação Infantil</h1>
            <p className={style.text}>Recebendo crianças até 5 anos,  essa etapa de ensino tem o foco no cuidar e educar promovendo o desenvolvimento físico, psicológico, intelectual, social, emocional e afetivo das crianças dessa faixa etária. A proposta pedagógica incentiva a construção de conhecimentos pela criança por meio da mediação das professoras. Temas geradores e projetos de pesquisa são desenvolvidos a partir de assuntos sugeridos nos livros, entretanto, eles não são seguidos linearmente pela Escola, pois são considerados os interesses de aprendizagem de cada turma, como também as vivências provocadas pelos interesses das crianças.<br></br>Na Educação Infantil, as crianças têm aulas semanais de educação física, música e informática, além de mais um diferencial de qualidade oferecido pelo Colégio Executivo refere-se à oferta aos alunos, desde o nível 2, do ensino bilíngue.</p>
          </div>
          <Image className={style.img_nivel1} src={ed_infantil} alt="nivel-1"/>
          <p className={style.paragrafh}>Feira de Jogos Matemáticos - Educação Infantil</p>
        </div>
      </div>
  )
}