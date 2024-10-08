import React from 'react';
import Button from './../Button/index';
import LogoFullColor from '../Icons/Logo';

import './style.global.css';

const Header = () => {
  return (
    <header className="header">
      <div>
        <LogoFullColor color='#fff' />
      </div>
      <Button label="Agende sua sessão" />
    </header>
  );
};

export default Header;
