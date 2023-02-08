/* eslint-disable */
import React from 'react';
import FooterContainer from '../container/footerContainer';
import Bw from '../../../../assets/images/bw.png';


import '../style/footerStyles.scss';

const Footer = () => (
  <FooterContainer>
      <footer className="footer">
        <div className='footer-home'>
        <div className="footer-detail-top">

        

        </div>
        <div className='footer-detail-bottom'>
        <div>
        <img alt="footer-logo" className="footer-logo" src={Bw}/>
           There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </div>
        <div>
          <div>Gizlilik</div>
          <p>Kişisel Verilerin Korunması</p>
          <p>Aydınlatma Metni</p>
        </div>
        <div>
          <div>İletişim</div>
          <p>iletisim.zorgundostu@gmail.com</p>
        </div>
        </div>
       
        </div>
        
        
      </footer>
  </FooterContainer>
);

export default Footer;
