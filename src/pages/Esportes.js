import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import vem_ser_atleta from '../images/VEM SER UM ATLETA EXECUTIVO (Apresentação (169)).png'
import modalidades from '../images/Educação Física (3).png'
import Image from "next/image";
import style from '../components/css/Esportes.module.css'

export default function Esportes() {
  return (
    <main>
      <Header />
      <Image src={vem_ser_atleta} alt="logo-vem-ser-atleta"/>

      <div>
        <Image className={style.img} src={modalidades} alt="modalidades"/>
        <div>
          <h1>Educação Física</h1>
          <h1>+ 7 Modalidades Esportivas</h1>
          <p> O esporte é um fenômeno que se manifesta de diversas maneiras, sendo uma prática extremamente importante para crianças e adolescentes, visto que engloba diversas áreas importantes para a humanidade, como saúde, educação, turismo, entre outros.</p><br></br>
          <p>No Colégio Executivo, trabalhamos o esporte como instrumento pedagógico, analisando aspectos relacionados à socialização, construção de valores morais e éticos, bem como à recreação e lazer, e sua importância para o desenvolvimento integral de crianças e adolescentes.</p>
        </div>
      </div>
      <div>
        <div>
          <h1>Espaços</h1>
          <p>Hoje a nossa escola conta com um ginásio poliesportivo que atende as aulas de Educação Física, Basquete, Futsal, Karatê e Vôlei. Além disso, o nosso complexo também possui uma sala de aula para a prática das modalidade de Ballet, Ginástica Rítmica e Ginástica Aeróbica, e um espaço aquático para a prática de Natação.</p>
        </div>
        <Image src={modalidades} alt="modalidades"/>
      </div>
      <Footer />
    </main>
  )
}