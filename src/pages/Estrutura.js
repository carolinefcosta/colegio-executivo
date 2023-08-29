import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import style from '../components/css/Estrutura.module.css';
import Link from "next/link";

export default function Estrutura() {
  return (
    <main className={style.main}>
      <Header />
      <div>Conheça nossa estrutura</div>
      <p>A estrutura do Colégio Executivo e do Berçário Doce Mel contam com um amplo espaço e equipamentos de ponta. Todas as salas de aula tem o seu mobiliário adequado para os alunos, sendo todas climatizadas e monitoradas por câmeras de segurança interna.</p>
      <ul>
        <li>6 salas de aula - Educação Infantil;</li>
        <li>13 salas de aula - Ensino Fundamental;</li>
        <li>3 salas de aula - Ensino Médio;</li>
        <li>Laboratório de Informática e Robótica;</li>
        <li>Laboratório de Ciências Multidisciplinar;</li>
        <li>Biblioteca;</li>
        <li>Auditório;</li>
        <li>Quadra poliesportiva;</li>
        <li>Campinho de futebol;</li>
        <li>Sala de danças;</li>
        <li>2 Parquinhos de areia;</li>
        <li>Parquinho coberto;</li>
        <li>Cantina;</li>
        <li>2 Salas de Estudos;</li>
        <li>2 Salas para descanso;</li>
        <li>Salas de descanso no espaço do Tempo Integral;</li>
        <li>Caixa de areia;</li>
        <li>1 Play ground.</li>
      </ul>
      <Link href="/FaleConosco">
        Marque a sua visita hoje mesmo e conheça tudo que a nossa escola pode oferecer para a educação dos seus filhos.
      </Link>
      <Footer />
    </main>
  )
}