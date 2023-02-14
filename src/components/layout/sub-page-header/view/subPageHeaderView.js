/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import SubPageHeaderContainer from '../container/subPageHeaderContainer';

import '../style/subPageHeaderStyles.scss';

const SubPageHeader = () => {
  const navigate = useNavigate();
  const [isVisibleMobileMenu, setIsVisibleMobileMenu] = React.useState(false);

  // TODO: Giriş Yap buttons commented, maybe it will be added later.
  return (
    <SubPageHeaderContainer>
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
              <span onClick={() => navigate('misafir-kabul-edebilenler')}>Misafir Kabul Edebilenler</span>
              <span onClick={() => navigate('misafir-etmek-istiyorum')}>Misafir Kabul Et</span>
              <span onClick={() => navigate('konaklamaya-ihtiyacim-var')}>Konaklama ihtiyacım var</span>
              <span onClick={() => navigate('depremzede-konaklama-talepleri')}>Konaklama ihtiyacı olanlar</span>
              <div className='social-logos'>
                <Link to="https://twitter.com/canevim_tr" target="_blank">
                  <FaTwitter />
                </Link>
                <Link
                  to="https://www.instagram.com/canevim_tr/"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
              </div>
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
              <span onClick={() => navigate('can-evim-hakkinda')}>Hakkımızda</span>
            </div>
          )}
        </>
      )}
    </SubPageHeaderContainer>
  );
};

export default SubPageHeader;
