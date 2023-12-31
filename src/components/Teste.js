import React, { useState, useEffect } from 'react';
import styleHeader from './css/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../images/logo.png';
// import lupa from '../images/lupa.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPaginaEspecial, setIsPaginaEspecial] = useState(false);
  // const [isSearchVisible, setSearchVisible] = useState(false);
  // const [searchTerm, setSearchTerm] = useState('');

  // const handleImageClick = () => {
  //   if (isSearchVisible === false) {
  //     setSearchVisible(true);
  //   } else {
  //     setSearchVisible(false);
  //   }
  // };

  // const handleInputChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const handleSearchSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('Pesquisar por:', searchTerm);
  // };

  useEffect(() => {
    if (window.location.pathname === '/Estrutura') {
      setIsPaginaEspecial(true);
    }
  }, []); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${styleHeader.header} ${isPaginaEspecial ? styleHeader.pageEspecial : ''}`}>
      {/* Botão para o menu de hambúrguer */}
      <button className={styleHeader.menuButton} onClick={toggleMenu}>
        <div className={styleHeader.bar} />
        <div className={styleHeader.bar} />
        <div className={styleHeader.bar} />
      </button>

      {/* Logotipo e texto */}
      <div className={styleHeader.display}>
        <Image className={styleHeader.img} src={logo} alt='logo-executivo' />
        <Link href='/' className={`${styleHeader.link_col_executivo}`}>Colégio Executivo</Link>
      </div>

      <div className={`${styleHeader.menu} ${menuOpen ? styleHeader.open : ''}`}>
        <div className={styleHeader.links}>
          <Link href='/' className={`${styleHeader.link}`}>Página Inicial</Link>
          <Link href='/Niveis' className={`${styleHeader.link}`}>Níveis de ensino</Link>
          <Link href='/Estrutura' className={`${styleHeader.link}`}>Estrutura</Link>
          <Link href='/Esportes' className={`${styleHeader.link}`}>Esportes</Link>
          <Link href='/Diferenciais' className={`${styleHeader.link}`}>Nossos Diferenciais</Link>
          <Link href='/FaleConosco' className={`${styleHeader.link}`}>Fale Conosco</Link>
          <Link href='/Parceiros' className={`${styleHeader.link}`}>Parceiros</Link>
        </div>
      </div>
      {/* <Image
      className={styleHeader.img_pesquisa}
      src={lupa} alt='lupa-pesquisa'
      onClick={handleImageClick}
      /> */}
      {/* {
        isSearchVisible && (
          <form onSubmit={handleSearchSubmit} className={styleHeader.form}>
          <input
            type="text"
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button
          className={styleHeader.button_form}
          type="submit">
            Pesquisar
          </button>
        </form>
        )
      } */}
    </div>
  );
}

export default Header;
