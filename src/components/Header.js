import React, { useState } from 'react';
import styleHeader from './css/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../images/logo.png';
import lupa from '../images/lupa.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isPaginaEspecial = window.location.pathname === '/Estrutura';

  const textClass = isPaginaEspecial ? styleHeader.textWhite : styleHeader.textBlack;

  return (
    <div className={styleHeader.header}>
      {/* Botão para o menu de hambúrguer */}
      <button className={styleHeader.menuButton} onClick={toggleMenu}>
        <div className={styleHeader.bar} />
        <div className={styleHeader.bar} />
        <div className={styleHeader.bar} />
      </button>

      {/* Logotipo e texto */}
      <div className={styleHeader.display}>
        <Image className={styleHeader.img} src={logo} alt='logo-executivo' />
        <Link href='/' className={`${styleHeader.link_col_executivo} ${textClass}`}>Colégio Executivo</Link>
      </div>

      <div className={`${styleHeader.menu} ${menuOpen ? styleHeader.open : ''}`}>
        <div className={styleHeader.links}>
          <Link href='/' className={`${styleHeader.link} ${textClass}`}>Página Inicial</Link>
          <Link href='/Niveis' className={`${styleHeader.link} ${textClass}`}>Níveis de ensino</Link>
          <Link href='/Estrutura' className={`${styleHeader.link} ${textClass}`}>Estrutura</Link>
          <Link href='/Esportes' className={`${styleHeader.link} ${textClass}`}>Esportes</Link>
          <Link href='/Diferenciais' className={`${styleHeader.link} ${textClass}`}>Nossos Diferenciais</Link>
          <Link href='/FaleConosco' className={`${styleHeader.link} ${textClass}`}>Fale Conosco</Link>
          <Link href='/Parceiros' className={`${styleHeader.link} ${textClass}`}>Parceiros</Link>
        </div>
      </div>
      
      <Image className={styleHeader.img_pesquisa} src={lupa} alt='lupa-pesquisa' />
    </div>
  );
}

export default Header;
