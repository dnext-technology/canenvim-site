/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderContainer from '../container/headerContainer';

import '../style/headerStyles.scss';

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      {({ logo }) => (
        <header className="header">
          <div onClick={() => navigate('/')} className="header-right">
            <img alt="logo" className="logo" src={logo} />
            <span>Misafirperver</span>
          </div>
          <div className='header-nav'>
            <span onClick={() => navigate('about')}>Hakkımızda</span>
            <span>Konaklama</span>
          </div>
        </header>
      )}
    </HeaderContainer>
  )
};

export default Header;
