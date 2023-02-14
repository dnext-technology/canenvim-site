/* eslint-disable */
import React from 'react';
import FooterContainer from '../container/footerContainer';
import Logo from '../../../../assets/images/canevim-logo-light-landscape.svg';
import { FiMail } from "react-icons/fi";
import { FaTwitter, FaInstagram, FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';




import '../style/footerStyles.scss';

const Footer = () => {
  const navigate = useNavigate();

  return (

    <FooterContainer>
      <div className="footer-home">
        <div className="base-container">
          <div className="col-3">
            <div className="content">
              <span onClick={() => navigate('/')}>
                <img alt="footerLogo" className="footerLogo" src={Logo} />
              </span>
              <div className='footerText'>
                Can Evim, felaketlerden etkilenen insanlara yönelik ihtiyaçların karşılanması hedefiyle kurulan projedir. Desteğinizle bize en çok ihtiyacı olan insanların yanlarında olmamıza yardımcı olabilirsiniz.
              </div>
              <div className='socials'>
                <div className='social-network'>
                  <div>
                    <Link to={'https://www.instagram.com/canevim_tr/'} target='_blank'>
                      <FaInstagram />
                    </Link>
                  </div>
                  <div>
                    <Link to={'https://twitter.com/canevim_tr'} target='_blank'>
                      <FaTwitter />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="content">
              <h3 className="footerTitle">Linkler</h3>
              <ul className="footerMenu">
                <li>
                  <a onClick={() => navigate('privacy')}>Gizlilik</a>
                </li>
                <li>
                  <a download="KVKK.pdf" href="KVKK.pdf">KVKK</a>
                </li>
                <li>
                  <a href="#">Aydınlatma Metni</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <div className="content">
              <h3 className="footerTitle">Menü</h3>
              <ul className="footerMenu">
                <li>
                  <a href="#">Anasayfa</a>
                </li>
                <li>
                  <a href="#">Hakkımızda</a>
                </li>
                <li>
                  <a href="#">İletişim</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <div className="content">
              <h3 className="footerTitle">Sorunuz mu var ?</h3>
              <ul className="footerMenu contact">
                <li>
                  <FiMail /> testDestek@gmail.com
                </li>
                <li>
                  <FaPhoneAlt /> +0 232 225 3411
                </li>
                <li>
                  <FaLocationArrow /> Test Location
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyRight">
          © 2023 CanEvim.org
        </div>
      </div>
    </FooterContainer>
  )

};

export default Footer;
