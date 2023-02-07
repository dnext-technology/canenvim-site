import React from 'react';
import HeaderContainer from '../container/headerContainer';

import '../style/headerStyles.scss';

const Header = () => (
  <HeaderContainer>
    {({ logo }) => (
      <header className="header">
        <div className="header-right">
          <img alt="logo" className="logo" src={logo} />
          <span>Misafirperver</span>
        </div>
        <div className='header-nav'>
          <span>Hakkımızda</span>
          <span>Konaklama</span>
        </div>
      </header>
    )}
  </HeaderContainer>
);

export default Header;
