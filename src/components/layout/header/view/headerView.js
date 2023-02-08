/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderContainer from '../container/headerContainer';
import Button from '../../../button/buttonView';

import '../style/headerStyles.scss';

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      {({ logo }) => (
        <header className="header">
          <img
            alt="logo"
            className="logo"
            src={logo}
            onClick={() => navigate('/')}
          />
          <div className="header-nav">
            <span onClick={() => navigate('about')}>Hakkımızda</span>
            <span>Konaklama</span>
            <Button
              className="login-button"
              onClick={() => null}
              text="Giriş Yap"
            />
          </div>
        </header>
      )}
    </HeaderContainer>
  );
};

export default Header;
