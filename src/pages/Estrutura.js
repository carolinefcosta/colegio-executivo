import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import style from '../components/css/Estrutura.module.css';
import Link from "next/link";
import Image from "next/image";
import espaco_2 from '../images/2.png';
import espaco_10 from '../images/10.png';
import ImageCarousel from '../components/ImageCarousel';

const images = [espaco_2, espaco_10];

export default function Estrutura() {
  return (
    <main className={style.main}>
      <Header />
      <h1 className={style.h1}>Conheça nossa estrutura</h1>
      <div className={style.div_main_img}>
        <div>
          <ImageCarousel images={images} />
        </div>
        <div>
          <ImageCarousel images={images} />
        </div>
      </div>
      <p className={style.text}>A estrutura do Colégio Executivo e do Berçário Doce Mel contam com um amplo espaço e equipamentos de ponta. Todas as salas de aula tem o seu mobiliário adequado para os alunos, sendo todas climatizadas e monitoradas por câmeras de segurança interna.</p>
      <ul className={style.text}>
        <li>✔️ 6 salas de aula - Educação Infantil;</li>
        <li>✔️ 13 salas de aula - Ensino Fundamental;</li>
        <li>✔️ 3 salas de aula - Ensino Médio;</li>
        <li>✔️ Laboratório de Informática e Robótica;</li>
        <li>✔️ Laboratório de Ciências Multidisciplinar;</li>
        <li>✔️ Biblioteca;</li>
        <li>✔️ Auditório;</li>
        <li>✔️ Quadra poliesportiva;</li>
        <li>✔️ Campinho de futebol;</li>
        <li>✔️ Sala de danças;</li>
        <li>✔️ 2 Parquinhos de areia;</li>
        <li>✔️ Parquinho coberto;</li>
        <li>✔️ Cantina;</li>
        <li>✔️ 2 Salas de Estudos;</li>
        <li>✔️ 2 Salas para descanso;</li>
        <li>✔️ Salas de descanso no espaço do Tempo Integral;</li>
        <li>✔️ Caixa de areia;</li>
        <li>✔️ 1 Play ground.</li>
      </ul>
      <Link className={style.text} href="/FaleConosco">
        Clique aqui e marque a sua visita hoje mesmo e conheça tudo que a nossa escola pode oferecer para a educação dos seus filhos.
      </Link>
      <Footer />
    </main>
  )
}