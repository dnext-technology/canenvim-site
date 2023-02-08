/* eslint-disable */
import React from 'react';
import AboutPageContainer from '../container/aboutPageContainer';
import { Button } from '../../../components';
import Hand from '../../../assets/images/hand.png';
import Deprem from '../../../assets/images/deprem.png';

import '../style/aboutPageStyles.scss'

const AboutPage = () => {
return(
    <AboutPageContainer>
    {({}) => {
    return(
        <>
        <div className='about-container'>
            <p style={{ color: "#D42E13E5", fontSize: 40}}>Hakkımızda</p>
            <p style={{ color: "#000000", fontSize: 18, fontWeight: 400}}>
                 Kriz zamanlarında, ölüm kalım durumundaki insanların yardımımıza ihtiyacı var. Görevimiz, hayatları kurtarmak, korumak ve yeniden inşa edilmesine yardım etmektir.

                Tek bir kaynaktan bilgi toplamak üzere kaynaklarımızı bir araya getirerek, Türk halkının doğal afet ve felaket sonrasında koordine olmasında önemli bir noktada yer almak istiyoruz.İnsanların birbirine hızlıca yardım etmesini ve isteyenlerin kolayca bağış yapması yeni oluşturmaya çalışıyoruz.
                Ve yardıma ihtiyacı olan insanlara hızlı bir şekilde yardım ulaştırarak anında etki yaratıyoruz.
            </p>
            <p style={{ color: "#000000", fontSize: 18 }}>Zorgündostu Ekibi</p>
            
        </div>
        </>
      )}}
    </AboutPageContainer>
);
}
export default AboutPage;
