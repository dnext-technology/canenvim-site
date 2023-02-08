/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import HeaderContainer from '../container/headerContainer';

import '../style/headerStyles.scss';

const Header = () => {
  const navigate = useNavigate();
  const [isVisibleMobileMenu, setIsVisibleMobileMenu] = React.useState(false);

  // TODO: Giriş Yap buttons commented, maybe it will be added later.
  return (
    <HeaderContainer>
      {({ logo, menuIcon }) => (
        <>
          <header className="header">
            <img
              alt="logo"
              className="logo"
              src={logo}
              onClick={() => navigate('/')}
            />
            <div className="header-nav">
              <div className='social-logos'>
                <Link to="https://twitter.com/zorgundostuyrdm" target="_blank">
                  <FaTwitter />
                </Link>
                <Link
                  to="https://www.instagram.com/zorgundostuyardimlasmaagi/"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
              </div>
              <span onClick={() => navigate('about')}>Hakkımızda</span>
            </div>

            <img
              alt="menu-icon"
              className="menu-icon"
              src={menuIcon}
              onClick={() => setIsVisibleMobileMenu(!isVisibleMobileMenu)}
            />
          </header>
          {isVisibleMobileMenu && (
            <div className="header-mobile">
              <span onClick={() => navigate('about')}>Hakkımızda</span>
            </div>
          )}
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
