import React, { useState } from 'react';
import IconMenu from '../Icons/IconMenu';
import './style.global.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Menu icon clicked!'); // Log para verificar se o clique está funcionando
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="hamburger-menu">
      {/* Ícone de menu personalizado que controla a abertura/fechamento */}
      <div onClick={toggleMenu}>
        <IconMenu color={'#fff'} />
      </div>

      {/* Menu deslizante que é exibido quando o estado isOpen é verdadeiro */}
      <nav className={`menu-content ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={closeMenu}>
          &times;
        </button>
        <ul>
          <li><a href="#home">Início</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Terapia</a></li>
          <li><a href="#contact">Links</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
