import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EducacaoInfantil from "../components/EducacaoInfantil";
import style from '../components/css/Niveis.module.css'
import EnsinoFundamental from "../components/EnsinoFundamental";
import EnsinoMedio from "../components/EnsinoMedio";

export default function Niveis() {
  return(
    <div className={style.divMain}>
      <Header />
      <EducacaoInfantil />
      <EnsinoFundamental />
      <EnsinoMedio />
      <Footer />
    </div>
  )
}