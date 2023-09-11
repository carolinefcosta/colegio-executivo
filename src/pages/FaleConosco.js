import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import fam_executivo from '../images/1.png';
import face from '../images/facebook.png';
import insta from '../images/insta.png';
import whats from '../images/whatsapp.png';
import style from  '../components/css/FaleConosco.module.css';
import { MyMap } from "@/components/MyMap";

export default function FaleConosco() {
  return (
    <div className={style.main}>
      <Header />
      <div className={style.div_main}>
        <div>
          <h1 className={style.h1}>Telefones:</h1>
          <p className={style.text}>(84) 3236-2763 </p>
          <p className={style.text}>(84) 98726-6016 </p>
          <h2 className={style.h2}>E-mail:</h2>
          <a href="comunicacao@colegioexecutivo.com.br"
          className={style.text_contato} 
          >comunicacao@colegioexecutivo.com.br</a>
        </div>
        <Image className={style.img} src={fam_executivo} alt="logo-familia-executivo"/>
          <h1 className={style.h1}>Nossas Redes Sociais</h1>
        <div className={style.div_redes_sociais}>
          <a href="https://www.facebook.com/colegioexecutivo/">
            <Image className={style.logo_redes_sociais} src={face} alt="facebook"/>
          </a>
          <a href="https://www.instagram.com/colegioexecutivo/">
            <Image className={style.logo_redes_sociais} src={insta} alt="instagram"/>
          </a>
          <a href="https://api.whatsapp.com/send?phone=5584987266016&text=colegio_executivo">
            <Image className={style.logo_redes_sociais} src={whats} alt="whatsapp"/>
          </a>
        </div>
        <div>
          <h1 className={style.h1}>Como Chegar</h1>
          <p className={style.text}>CEP: 59094-520</p>
          <p className={style.text}>Rua Praia de Jacuma, 9016 - Ponta Negra, Natal - RN.</p>
          <iframe
            className={style.map_iframe}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.8644938206508!2d-35.18285259999999!3d-5.874663500000009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff326d02427b%3A0x4143f9b3c35d0f8f!2sR.%20Praia%20de%20Jacum%C3%A3%2C%209016%20-%20Ponta%20Negra%2C%20Natal%20-%20RN%2C%2059094-520!5e0!3m2!1spt-BR!2sbr!4v1694186350825!5m2!1spt-BR!2sbr"
            width="900"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <h1 className={style.h1}>Trabalhe Conosco</h1>
          <p className={style.text}>Envie o seu currículo para nosso e-mail e ponha o cargo pretendido no assunto do e-mail.</p>
          <a href="rh@colegioexecutivo.com.br"
          className={style.text_contato}
          >rh@colegioexecutivo.com.br</a>
        </div>
      </div>
      <Footer />
    </div>
  )
}