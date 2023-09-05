import React, { useState } from 'react';
import styleHeader from './css/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../images/logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styleHeader.header}>
      <div className={styleHeader.display}>
        <Image className={styleHeader.img} src={logo} alt='logo-executivo' />
        <Link href='/' className={styleHeader.link}>Colégio Executivo</Link>
      </div>
      <button className={styleHeader.menuButton} onClick={toggleMenu}>
        <div className={styleHeader.bar} />
        <div className={styleHeader.bar} />
        <div className={styleHeader.bar} />
      </button>
      <div className={`${styleHeader.menu} ${menuOpen ? styleHeader.open : ''}`}>
        <div className={styleHeader.links}>
          <Link href='/' className={styleHeader.link}>Página Inicial</Link>
          <Link href='/Niveis' className={styleHeader.link}>Níveis de ensino</Link>
          <Link href='/Estrutura' className={styleHeader.link}>Estrutura</Link>
          <Link href='/Esportes' className={styleHeader.link}>Esportes</Link>
          <Link href='/Diferenciais' className={styleHeader.link}>Nossos Diferenciais</Link>
          <Link href='/FaleConosco' className={styleHeader.link}>Fale Conosco</Link>
          <Link href='/Parceiros' className={styleHeader.link}>Parceiros</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;

