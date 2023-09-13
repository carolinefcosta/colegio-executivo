import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import parceiros from '../images/parceiros.png';
import style from '../components/css/Parceiros.module.css';

export default function Parceiros() {
  return (
    <div className={style.main}>
      <Header />
      <div className={style.div_main}>
        <h1 className={style.h1}>Nossos Parceiros</h1>
        <Image className={style.img} src={parceiros} alt="logo-parceiros"/>
      </div>
      <Footer />
    </div>
  )
}