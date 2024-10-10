import React from 'react';
import Button from './../Button/index';
import Logo from '../Icons/Logo';
import Menu from '../Menu';

import './style.global.css';

const Header = () => {
  return (
    <header className="flpsi-header">
      <nav className="flpsi-navbar">
        <Logo color='#fff' />
        <div className="flpsi-navbar-action">
          <Button label="Agende sua sessão" styleType="quarternary"/>
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
