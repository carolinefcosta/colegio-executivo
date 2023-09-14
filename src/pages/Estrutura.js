import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import style from '../components/css/Estrutura.module.css';
import Link from "next/link";
import ImageCarousel from '../components/ImageCarousel';
import sala_leitura from '../images/10.png';
import sala_marker from '../images/13.png';
import sala_maker2 from '../images/12.png';
import sala_maker3 from '../images/14.png';
import auditorio from '../images/8.png';
import auditorio2 from '../images/7.png';
import lab_ciencias from '../images/9.png';
import sala from '../images/2.png';
import sala2 from '../images/6.png';
import sala3 from '../images/4.png';
import sala4 from '../images/5.png';



const images1 = [
  sala_leitura,
  sala_marker,
  sala_maker2,
  sala_maker3,
  auditorio,
  lab_ciencias
];

const images2 = [
  sala,
  sala2,
  sala3,
  sala4,
  auditorio2,
];

export default function Estrutura() {
  return (
    <main className={style.main}>
      <Header />
      <h1 className={style.h1}>Conheça nossa estrutura</h1>
      <div className={style.div_main_img}>
        <div className={style.img_carousel}>
          <ImageCarousel images={images1} />
        </div>
        <div className={style.img_carousel}>
          <ImageCarousel images={images2} />
        </div>
      </div>
      <p className={style.text}>A estrutura do Colégio Executivo e do Berçário Doce Mel contam com um amplo espaço e equipamentos de ponta. Todas as salas de aula tem o seu mobiliário adequado para os alunos, sendo todas climatizadas e monitoradas por câmeras de segurança interna.</p>
      <ul className={style.text}>
        <li>✔️6 salas de aula - Educação Infantil;</li>
        <li>✔️13 salas de aula - Ensino Fundamental;</li>
        <li>✔️3 salas de aula - Ensino Médio;</li>
        <li>✔️Laboratório de Informática e Robótica;</li>
        <li>✔️Laboratório de Ciências Multidisciplinar;</li>
        <li>✔️Biblioteca;</li>
        <li>✔️Auditório;</li>
        <li>✔️Quadra poliesportiva;</li>
        <li>✔️Campinho de futebol;</li>
        <li>✔️Sala de danças;</li>
        <li>✔️2 Parquinhos de areia;</li>
        <li>✔️Parquinho coberto;</li>
        <li>✔️Cantina;</li>
        <li>✔️2 Salas de Estudos;</li>
        <li>✔️2 Salas para descanso;</li>
        <li>✔️Salas de descanso no espaço do Tempo Integral;</li>
        <li>✔️Caixa de areia;</li>
        <li>✔️1 Play ground.</li>
      </ul>
      <p className={style.text}>Marque a sua visita hoje mesmo e conheça tudo que a nossa escola pode oferecer para a educação dos seus filhos.</p>
      <Link className={style.text_link} href="/FaleConosco">Clique aqui para agendar sua visita!</Link>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px'}}>
        <iframe
          width="960"
          height="615"
          className={style.iframe}
          src="https://www.youtube.com/embed/LysG3TlOwp0"
          frameborder="0"
          allowFullScreen
        ></iframe>
      </div>
      <Footer />
    </main>
  )
}