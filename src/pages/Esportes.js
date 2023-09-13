import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import vem_ser_atleta from '../images/VEM SER UM ATLETA EXECUTIVO (Apresentação (169)).png'
import modalidades from '../images/Educação Física (3).png'
import Image from "next/image";
import style from '../components/css/Esportes.module.css'
import esp_aquatico from '../images/15.png';
import gin_esp from '../images/19.png';
import gin_esp2 from '../images/18.png';
import ballet from '../images/16.png';
import ballet2 from '../images/17.png';
import trofeus from '../images/11.png';
import ImageCarousel from "@/components/ImageCarousel";

const images = [esp_aquatico, gin_esp, gin_esp2, ballet, ballet2, trofeus]

export default function Esportes() {
  return (
    <main className={style.main}>
      <Header />
      <Image src={vem_ser_atleta} alt="logo-vem-ser-atleta"/>

      <div className={style.main_div_logo_text}>
        <Image className={style.img} src={modalidades} alt='logo-executivo-45-anos'/>
        <div className={style.main_div_h1_text}>
          <h1 className={style.h1}>Educação Física</h1>
          <h1 className={`${style.h1} ${style.h1_color}`}>+ 7 Modalidades Esportivas</h1>
          <p className={style.text}>O esporte é um fenômeno que se manifesta de diversas maneiras, sendo uma prática extremamente importante para crianças e adolescentes, visto que engloba diversas áreas importantes para a humanidade, como saúde, educação, turismo, entre outros.</p>
          <p className={style.text}>No Colégio Executivo, trabalhamos o esporte como instrumento pedagógico, analisando aspectos relacionados à socialização, construção de valores morais e éticos, bem como à recreação e lazer, e sua importância para o desenvolvimento integral de crianças e adolescentes.</p>
        </div>
      </div>
      <div className={style.main_div_logo_text}>
        <div className={style.main_div_h1_text}>
          <h1 className={`${style.h1} ${style.h1_color}`}>Espaços</h1>
          <p className={style.text}>Hoje a nossa escola conta com um ginásio poliesportivo que atende as aulas de Educação Física, Basquete, Futsal, Karatê e Vôlei. Além disso, o nosso complexo também possui uma sala de aula para a prática das modalidade de Ballet, Ginástica Rítmica e Ginástica Aeróbica, e um espaço aquático para a prática de Natação.</p>
        </div>
        <div className={style.div_main_img}>
          <ImageCarousel className={style.img} images={images} />
        </div>
      </div>
      <Footer />
    </main>
  )
}