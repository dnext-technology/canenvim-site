/* eslint-disable */
import React from 'react';
import FooterContainer from '../container/footerContainer';
import Logo from '../../../../assets/images/logo-footer.png';
import { FiMail } from "react-icons/fi";
import { FaTwitter,FaInstagram } from "react-icons/fa";
import { useNavigate,Link } from 'react-router-dom';




import '../style/footerStyles.scss';

const Footer = () => {
 const navigate = useNavigate();
  
  return(

  <FooterContainer>
    
     
        <div className='footer-home'>
        
        <div className='footer-detail-bottom'>
        <div>
        
        <span onClick={() => navigate('/')}><img alt="footer-logo" className="footer-logo" src={Logo}/></span>


        <div className='footer-bottom-left'>
        Zor Gün Dostu, felaketlerden etkilenen insanlara yönelik ihtiyaçların karşılanması hedefiyle kurulan projedir. Desteğinizle bize en çok ihtiyacı olan insanların yanlarında olmamıza yardımcı olabilirsiniz.
        </div>           
        </div>
        <div className='footer-bottom-center'>
          <div className='gizlilik'><span onClick={() => navigate('privacy')}>Gizlilik</span></div>
          <div>Kişisel Verilerin Korunması</div>
          <div>Aydınlatma Metni</div>
        </div>
        <div className='footer-bottom-right'>
          <div className='iletisim'>İletişim</div>
          <p><FiMail/>  iletisim.zorgundostu@gmail.com</p>
        </div>
        </div>
        <div className='socials'>
          <div>© 2023 Zorgundostu</div>
          <div className='social-network'>
          <div>
          <Link to={'https://www.instagram.com/zorgundostuyardimlasmaagi/'} target='_blank'>
          <FaInstagram/>
          </Link>            
          </div>

          <div>
          <Link to={'https://twitter.com/zorgundostuyrdm'} target='_blank'>
          <FaTwitter/>
          </Link>
            
          </div>
        </div>
        </div>
        
       
        </div>
        
        
     
  </FooterContainer>
  )
  
};

export default Footer;
