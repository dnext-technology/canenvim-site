/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import HeaderContainer from '../container/headerContainer';
// eslint-disable-next-line import/no-useless-path-segments
import { Button } from '../../../../components';

import '../style/headerStyles.scss';
import Drawer from '../../../drawer';
import useWindowSize from '../../../../hooks/useWindowSize';

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const window = useWindowSize();

  useEffect(() => {
    if (window.width > 768 && open) {
      setOpen(false);
    }
  }, [window.width, open]);

  // TODO: Giriş Yap buttons commented, maybe it will be added later.
  return (
    <HeaderContainer>
      {({ logo, menuIcon }) => (
        <>
          <header className="headerHome">
            <div className="overlay"> </div>
            <div className="headerOuter">
              <img
                alt="logo"
                className="logo"
                src={logo}
                onClick={() => navigate('/')}
              />
              <div className="header-nav">
                <span onClick={() => navigate('misafir-kabul-edebilenler')}>
                  Misafir Kabul Edebilenler
                </span>
                <span onClick={() => navigate('misafir-etmek-istiyorum')}>
                  Misafir Kabul Et
                </span>
                <span onClick={() => navigate('can-evim-hakkinda')}>
                  Hakkımızda
                </span>
                <div className="social-logos">
                  <Link
                    to="https://twitter.com/zorgundostuyrdm"
                    target="_blank"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    to="https://www.instagram.com/zorgundostuyardimlasmaagi/"
                    target="_blank"
                  >
                    <FaInstagram />
                  </Link>
                </div>
              </div>
              <img
                alt="menu-icon"
                className="menu-icon"
                style={{ cursor: 'pointer' }}
                src={menuIcon}
                onClick={() => setOpen(!open)}
              />
            </div>
            <div className="info-card">
              <h1>Birbirimizin Yanındayız</h1>
              <p>
                Deprem felaketinden etkilenen vatandaşlarımıza yardım
                edebiliriz.
              </p>
              <Button
                onClick={() => navigate('konaklamaya-ihtiyacim-var')}
                text="Konaklamaya İhtiyacım Var"
                className="button-con default"
              />
              <Button
                onClick={() => navigate('konaklamaya-ihtiyacim-var')}
                text="Konaklamaya Uygun Yerim Var"
                className="button-con default"
              />
            </div>
          </header>
          <Drawer open={open} setOpen={setOpen} />
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
