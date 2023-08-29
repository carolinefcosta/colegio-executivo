import React from "react";
import style from '../components/css/Footer.module.css'
import Image from "next/image";
import insta from '../images/instagram.png'

export default function Footer() {
  return(
    <div className={style.main}>
      <a href="https://www.instagram.com/colegioexecutivo/" >
        <Image className={style.img} src={insta} alt='icon-linkedIn' />
      </a>
    </div>
  )
}